import React from "react";
import Layout from "./layouts/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
