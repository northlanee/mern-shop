import React from "react";

import { Header, Footer } from "./components";
import { Layout } from "antd";

const { Content } = Layout;

const App: React.FC<{}> = () => {
  return (
    <Layout>
      <Header />
      <Content>123</Content>
      <Footer />
    </Layout>
  );
};

export default App;
