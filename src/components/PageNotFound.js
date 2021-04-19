import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry, Page Not Found 404 :(</h2>
      <button className="delBtn">
        <Link to="/" style={{ color: "white" }}>
          Go to Home Page
        </Link>
      </button>
    </div>
  );
};

export default PageNotFound;
