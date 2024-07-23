import Table from "./components/Table";
import { staticData } from "./constants";

const columns = [
  { key: "id", header: "ID", editable: false },
  { key: "name", header: "Name", editable: true },
  { key: "username", header: "Username", editable: true },
  { key: "email", header: "Email", editable: true },
];

export default function App() {
  return (
    <div>
      <Table columns={columns} staticData={staticData} rowsPerPage={3} />
      <Table
        columns={columns}
        api="https://jsonplaceholder.typicode.com/users"
        rowsPerPage={3}
      />
    </div>
  );
}
