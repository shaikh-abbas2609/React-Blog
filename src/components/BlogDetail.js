import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(
    `http://localhost:8000/posts/${id}`,
    "GET"
  );

  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div className="blog-details">
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      <h2>Blog Details</h2>
      {post && (
        <div className="blog-detail">
          <h2>{post.title}</h2>
          <p>
            Written By <span>{post.author}</span>
          </p>
          <article>{post.body}</article>
          <button className="delBtn" onClick={handleDelete}>
            Delete Blog
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
