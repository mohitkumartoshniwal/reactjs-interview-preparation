import useFetch from "./hooks/useFetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export default function App() {
  const { data, isLoading, error } = useFetch<Post[]>(
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
