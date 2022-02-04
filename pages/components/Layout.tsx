import React from "react";
import Head from "next/head";
import Header from "./Header";
import { Container } from "@mui/material";
import Footer from "./Footer";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div>
        <Header />
        <Container maxWidth="sm">
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
