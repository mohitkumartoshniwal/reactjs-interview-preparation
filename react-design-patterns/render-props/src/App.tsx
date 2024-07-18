import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Card
        renderTitle={() => <h3>Title</h3>}
        renderBody={() => (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            deleniti.
          </p>
        )}
      />
      <Card
        renderTitle={() => <h3>Title 2</h3>}
        renderBody={() => <p>Lorem ipsum dolor,</p>}
      />
    </>
  );
}
