import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  padding: "96px",
};

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.5rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <dir class="paper container">
        <h1 class="text-danger">Page not found</h1>
        <p class="text-lead">
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <h4>
            <Link to="/">Go home</Link>.
          </h4>
        </p>
      </dir>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
