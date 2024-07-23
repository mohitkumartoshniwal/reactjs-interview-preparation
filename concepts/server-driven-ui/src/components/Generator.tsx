import React from "react";
import { GeneratorProps } from "../types";

const Generator = ({ schema, components }: GeneratorProps) => {
  return schema.map((field, index) => {
    return (
      <React.Fragment key={index}>
        {components[field.fieldType](field)}
      </React.Fragment>
    );
  });
};

export default Generator;
