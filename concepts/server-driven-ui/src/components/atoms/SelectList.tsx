import { SchemaType } from "../../types";

const SelectList = (props: SchemaType) => (
  <div>
    <label>{props.label}</label>
    <select multiple={props.multiple}>
      {props.options?.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default SelectList;
