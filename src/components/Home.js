import useFetch from "../hooks/useFetch";
import Post from "./Post";

const Home = () => {
  const { loading, data, error } = useFetch("http://localhost:8000/posts");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div> Loading ... </div>}
      {data && (
        <Post
          posts={data}
          title={data.length > 0 ? "All Post" : "No Posts to show"}
        />
      )}
    </div>
  );
};

export default Home;
