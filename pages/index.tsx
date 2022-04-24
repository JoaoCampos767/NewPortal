import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import MbmCrypto from "../app/MBMCrypto";
import Modules from "../src/components/modules/Modules";
import Sidebar from "../src/components/sidebar/Sidebar";
import Topbar from "../src/components/topbar/Topbar";
import Chat from "../src/components/chat/chat";
import styles from "../styles/Home.module.scss";

const Home: NextPage = (props: any) => {
  const [isHovering, setIsHovering] = React.useState(false);
  const [crypted, setCrypted] = React.useState("");
  const [decrypted, setDecrypted] = React.useState("");
  const onClick = () => {
    alert(MbmCrypto.mbmDecrypt(crypted).split("¨").join("\n"));
  };

  return (
    <div>
      <Sidebar
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      ></Sidebar>
      <Topbar value={props?.globals?.abc} isSidebarOpen={isHovering} />
      <div className="content">
        <iframe
          className="portal-frame"
          src="/portal-background"
          frameborder="0"
        ></iframe>
        <Modules>
          <Modules.Item title="MBMADM" code="01" image="/modules/MBMADM.png" />
          <Modules.Item title="MBMFIN" code="01" image="/modules/MBMFIN.png" />
          <Modules.Item title="MBMPDV" code="01" image="/modules/MBMPDV.png" />
          <Modules.Item title="MBMPRO" code="01" image="/modules/MBMPRO.png" />
          <Modules.Item
            title="MBMSERV"
            code="01"
            image="/modules/MBMSERV.png"
          />
          <Modules.Item
            title="MBMTRUCK"
            code="01"
            image="/modules/MBMTRUCK.png"
          />
          <Modules.Item
            title="MBM Suporte"
            code="01"
            image="/modules/MBMSuporte.png"
          />
          <Modules.Item title="MBMNFE" code="01" image="/modules/MBMNFE.png" />
          <Modules.Item
            title="MBMROBO"
            code="01"
            image="/modules/MBMROBO.png"
          />
          <Modules.Item
            title="Suporte Remoto"
            code="01"
            image="/modules/SuporteRemoto.png"
          />
        </Modules>
      </div>

      <Chat></Chat>
    </div>
  );
};

export default Home;
