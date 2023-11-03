import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewProducts() {
  const [product, setProduct] = useState(null);

  //technically asynchronous
  // gives use access to state (as props normally would), but the data is specific to the route 
  const location = useLocation();


  // dfferent way to do what Links do (can be used as onClick event handler is we want a <button> instead of a <Link> element)
  const naviguate = useNavigate();

  //refers to the dynamic part of the path (in this case, id)
  const params = useParams();

  //anything that is a var and that is used to manipulate state inside of a useEffect() is also passed as a dependency
  useEffect(() => {
    if (location.state) {
      setProduct(location.state.data);
    }
  }, [location]);

  return product ? (
    <div>
      <h1>Details</h1>
      <h2>{product?.name}</h2>
      <h2>{product?.type}</h2>
      <h2>{product?.price}</h2>
      <div>
        <button type="button" onClick={() => naviguate(-1)}>Go back</button>
      </div>
    </div>
  ) : (
    <p>loading..</p>
  );
}
