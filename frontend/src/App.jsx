import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    try {
      const response = await fetch("http://localhost:3000/products");

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1>Açaí Story</h1>

      <h2>Produtos</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{product.name}</h3>
          <p>Preço: R$ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;