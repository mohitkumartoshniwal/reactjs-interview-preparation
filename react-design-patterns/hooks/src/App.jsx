import useFetch from "./hooks/useFetch";

export default function App() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
