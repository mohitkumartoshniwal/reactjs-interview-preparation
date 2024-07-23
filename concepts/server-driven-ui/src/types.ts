export type GeneratorProps = {
  components: ComponentType;
  schema: SchemaType[];
};

export type ComponentType = {
  [key: string]: (props: SchemaType) => JSX.Element;
};
export type SchemaType = {
  label: string;
  name?: string;
  fieldType: string;
  multiple?: boolean;
  options?: string[];
  placeholder: string;
};
