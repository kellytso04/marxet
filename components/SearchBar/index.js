import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext } from "react";
import { useProductsContext } from "@context/productSearch";
import { doGetSearched } from "@api/product";
import { doGetProducts } from "@api/product";
import { useProducts } from "@context/product";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setProducts, searchedProducts, setSearchedProducts } = useProducts();

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const getSearchedProducts = await doGetSearched(searchTerm);
      setSearchedProducts(getSearchedProducts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className="form" sx={{ minWidth: "30%", width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <Input
          sx={{ verticalAlign: "baseline", width: "70%", color: "#ffffff" }}
          onChange={handleChange}
          placeholder="Search for listings..."
          endAdornment={<SearchIcon style={{ marginBottom: "5px" }}/>}
        />
      </form>
    </Box>
  );
};

export default Search;
