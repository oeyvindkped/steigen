import React from "react";
/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */

import type { NextPage } from "next";

import Layout from "./components/Layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Steigen resor">
      <h1>Side for Steigen</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor
        adipisci, quia alias illum, molestias quisquam, excepturi quidem nulla
        deleniti architecto itaque suscipit nobis nostrum quasi ipsum. Tempore
        perferendis similique obcaecati eveniet deserunt provident maiores
        explicabo, ut natus placeat ipsa. Odio, corporis illum eligendi incidunt
        ullam praesentium iste repudiandae hic.
      </p>
    </Layout>
  );
};

export default Home;
