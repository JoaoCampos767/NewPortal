import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../src/componentes/sidebar/Sidebar";
import Topbar from "../src/componentes/TopBar/topBar";
import styles from "../styles/Home.module.scss";
import React from "react";

const Home: NextPage = () => {
  const [isHovering, setHovering] = React.useState(false);

  return (
    <div>
      <Sidebar
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      ></Sidebar>
      <Topbar isSidebarOpen={isHovering}> </Topbar>
      <div className="content">
        <img src="/banner.jpg" className="bg-image" />
      </div>
    </div>
  );
};

export default Home;
