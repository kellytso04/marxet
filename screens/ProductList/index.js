import { Box, Grid } from "@mui/material";
import ItemCard from "@components/ItemCard";
import { useState, useEffect } from "react";
import { doGetProducts } from "@api/product";
import { useSearchContext } from "@context/productSearch";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { searchedProducts, setSearchedProducts } = useSearchContext();

  const fetchProducts = async () => {
    try {
      const data = await doGetProducts();
      setProducts(data ? data : []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Box
        className="Search"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "90%",
          margin: "auto",
          marginRight: "20%",
        }}
      >
        <Box
          className="Grid"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100vw",
            padding: "50px",
            marginLeft: "10vw",
          }}
        >
          <Grid container spacing={8}>
            {products.map((p, i) => {
              return (
                <Grid
                  key={i}
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  style={{ background: "inherit" }}
                >
                  <ItemCard product={p} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
