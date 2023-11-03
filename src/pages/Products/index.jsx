import { Link } from "react-router-dom";

function Products(props) {
  console.log("Inside ProductsPage: ", { props });

  const { products } = props;

  return (
    <main>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => {
          return (
            <>
              <li key={index}>
                <h3>{product.name}</h3>
                <p>£{product.price}</p>
              </li>
              <Link 
                to={`products/${product.id}`}
                state={{data: product}}>See details</Link>
            </>
          );
        })}
      </ul>
    </main>
  );
}

export default Products;
