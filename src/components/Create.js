import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const post = {
      title,
      body,
      author,
    };

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(() => {
      setLoading(false);
      history.push("/");
    });
  }

  return (
    <div className="create">
      <h2>Add a new post</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-controller">
          <input
            required
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
        </div>
        <div className="input-controller">
          <input
            required
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
            placeholder="Author"
          />
        </div>
        <div className="input-controller">
          <textarea
            required
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter Post Content"
          ></textarea>
        </div>
        {!loading && <button type="submit">Save Post</button>}
        {loading && (
          <button type="submit" disabled>
            Saving Post ...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
