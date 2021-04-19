const Post = ({ posts, title, deletePost }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {posts.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>Written By: {post.author}</p>
          <button onClick={() => deletePost(post.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Post;
