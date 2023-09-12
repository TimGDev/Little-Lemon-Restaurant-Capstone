import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Main({ children }) {
  return (
    <Fragment>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </Fragment>
  );
}
