import { Card } from "./components/Card";

export default function App() {
  return (
    <>
      <Card>
        <Card.Title text={"Title 1"} />
        <Card.Body
          text={
            "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,deleniti."
          }
        />
      </Card>

      <Card>
        <Card.Title text={"Title 2"} />
        <Card.Body text={"  Lorem ipsum dolor, sit "} />
      </Card>
    </>
  );
}
