import { SchemaType } from "../../types";

const Text = (props: SchemaType) => (
  <div>
    <label htmlFor={props.name}>{props.label}</label>
    <input
      type={props.fieldType.toLowerCase()}
      name={props.name}
      id={props.name}
      placeholder={props.placeholder}
    ></input>
  </div>
);

export default Text;
