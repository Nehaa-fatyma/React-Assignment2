import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Table from "./Components/Table";

const App = () => {
  const productList = [
    { id: 101, name: "Wireless Mouse", category: "Electronics", price: 25.99 },
    { id: 102, name: "Bluetooth Headphones", category: "Electronics", price: 49.99 },
    { id: 103, name: "Desk Chair", category: "Furniture", price: 89.99 },
    { id: 104, name: "Water Bottle", category: "Accessories", price: 12.5 },
  ];

  return (
    <div>
      <Header/>
      <Table products={productList}/>
      <Footer />
    </div>
  );
};

export default App;
