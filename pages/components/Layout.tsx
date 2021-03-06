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
