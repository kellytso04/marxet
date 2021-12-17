import { useEffect, useState } from "react";
import { Button, Modal, Box, Stack, Grid } from "@mui/material";
import ListingOption from './ListingOption.js'
import {ItemCard} from '../../ItemCard/index.js';
import { doGetUserProducts } from "@api/product";
import { useAuth } from "@context/auth";

const modalStyling = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '500px',
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AddListing = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await doGetUserProducts(user.uid);
    setProducts(products ? products : []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Button
        onClick={handleOpen}
        color="secondary"
        variant="outlined"
        sx={{ width: '50%' }}
      >
        Make an offer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="product-form"
        aria-describedby="product-form-description"
      >
        <Stack sx={modalStyling}>
          <h3>Select which listings you'd like to offer</h3>
          <Grid >
            {products.map( (product, i) => (
              <ListingOption key={i} id={product.id} name={product.name} />
            ))}
          </ Grid>
        </Stack>
      </Modal>
    </>
  );
};

export default AddListing;
