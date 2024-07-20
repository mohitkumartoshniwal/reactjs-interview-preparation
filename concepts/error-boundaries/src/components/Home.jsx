const Home = () => {
  if (Math.random() > 0.5) throw new Error("Error from Home");

  return <div>Home</div>;
};

export default Home;
