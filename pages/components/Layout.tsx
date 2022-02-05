import React from "react";
import Head from "next/head";
import WebHeader from "./Header/WebHeader";
import MobileHeader from "./Header/MobileHeader";
import { useMediaQuery, useTheme } from "@mui/material";

import Footer from "./Footer";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" type="image/png" href="logo.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        {isMobile ? <MobileHeader /> : <WebHeader />}
        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
