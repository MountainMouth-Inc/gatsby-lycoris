import * as React from "react";
import { Link } from "gatsby";

import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Container from "@components/container.js";
import Nav from "@components/nav.js";

const NotFoundPage = () => {
  return (
    <Layout>
      <Background>
        <Nav />
        <Container>
          <h1 class="text-danger">Page not found</h1>
          <p class="text-lead">
            Sorry 😔, we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === "development" ? (
              <>
                <br />
                Try creating a page in <code>src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
            <h4>
              <Link to="/">Go home</Link>.
            </h4>
          </p>
        </Container>
      </Background>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
