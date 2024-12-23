import React from "react";


const App = () => {
    const productList = [
      { id: 101, name: "Wireless Mouse", category: "Electronics", price: 25.99 },
      { id: 102, name: "Bluetooth Headphones", category: "Electronics", price: 49.99 },
      { id: 103, name: "Desk Chair", category: "Furniture", price: 89.99 },
      { id: 104, name: "Water Bottle", category: "Accessories", price: 12.5 },
    ];
}

const Table = ({ products }) => {
  return (
    <div className="table-container">
      <h2 className="table-heading">Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
