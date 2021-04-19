import { useEffect, useState } from "react";
import Post from "./Post";

const Home = () => {
  const [posts, setPost] = useState([
    { title: "Hey There", body: "This is body for 1", author: "mario", id: 1 },
    {
      title: "Hey There again",
      body: "This is body for 2",
      author: "luigi",
      id: 2,
    },
    {
      title: "Hey There third time",
      body: "This is body for 3",
      author: "shaun",
      id: 3,
    },
  ]);

  function deletePost(id) {
    let filteredPost = posts.filter((post) => post.id !== id);
    setPost(filteredPost);
  }

  useEffect(() => {
    console.log("useEffect ran");
  }, [posts]);

  return (
    <div className="home">
      <Post
        posts={posts}
        title={posts.length > 0 ? "All Blogs" : "No Posts to show"}
        deletePost={deletePost}
      />
    </div>
  );
};

export default Home;
