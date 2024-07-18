import withFetch from "../withFetch";

const PostList = ({ isLoading, data, error }) => {
  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div> Errror: {error.message}</div>;
  }

  return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
};

export default withFetch(
  PostList,
  "https://jsonplaceholder.typicode.com/posts"
);
