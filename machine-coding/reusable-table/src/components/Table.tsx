import { ChangeEvent, useEffect, useState } from "react";
import { Column, RowData } from "../types";

interface TableProps {
  columns: Column[];
  staticData?: RowData[];
  api?: string;
  rowsPerPage: number;
}

const Table = ({ columns, staticData, rowsPerPage, api }: TableProps) => {
  const [data, setData] = useState<RowData[]>([]);
  const [filteredData, setFilteredData] = useState<RowData[]>([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (staticData) {
      setData(staticData);
      setFilteredData(staticData);
    } else if (api) {
      fetch(api)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network Error");
          }
          return res.json();
        })
        .then((data: RowData[]) => {
          setData(data);
          setFilteredData(data);
        })
        .catch((err) => console.error(`Error fetching data: `, err));
    }
  }, [staticData, api]);

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFilter(value);
    const filtered = data.filter((row) => {
      return columns.some((column) => {
        return row[column.key]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      });
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  }

  function getPaginatedData() {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredData.slice(start, end);
  }

  function handleEdit(index: number, key: string, value: string) {
    const updatedData = [...data];
    updatedData[index][key] = value;
    setData(updatedData);
    setFilteredData(updatedData);
  }

  function handleDelete(index: number) {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    setFilteredData(updatedData);
  }

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const pagesArray = [...Array(totalPages).keys()];

  return (
    <div>
      <input
        type="text"
        placeholder="Filter data.."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <table className="reusable-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getPaginatedData().map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.editable ? (
                    <input
                      type="text"
                      value={row[column.key] as string | number}
                      onChange={(e) =>
                        handleEdit(rowIndex, column.key, e.target.value)
                      }
                    />
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
              <td>
                <button onClick={() => handleDelete(rowIndex)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {pagesArray.map((pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageChange(pageIndex + 1)}
            className={pageIndex + 1 === currentPage ? "active" : ""}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
