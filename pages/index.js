import { CircularProgress, Grid } from "@material-ui/core";
import ProductCard from "../components/ProductCard";
import { listProducts } from "../redux/actions/productActions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Alert } from "@material-ui/lab";

export default function Home() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Courses</h1>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        <Grid>
          <Grid container spacing={2} direction="row">
            {products.map((product) => (
              <Grid item key={product._id} xs={12} sm={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${baseUrl}/api/products/productRoute`)
//   const data = await res.json()
//   return {
//     props: {
//       products: data,
//     },
//   }
// }
