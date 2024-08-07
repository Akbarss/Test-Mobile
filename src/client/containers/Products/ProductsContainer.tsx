"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import skald from "../../../sklad.json";
import ProductCard from "../../components/cards/ProductsCard";
import ProductsSearch from "./ProductsPageComponents/ProductsSearch";

const ProductsContainer = () => {
  return (
    <Stack direction={"column"} id="#scroll_to_top" spacing={5} alignItems={"center"}>
      <Box
        width={"100%"}
        bgcolor={"secondary.main"}
        mt={-1}
        pt={{ xs: 7, md: 10 }}
        height={241}
        borderRadius={"0px 0px 20px 20px"}
      >
        <Stack
          sx={{
            height: "100%",
            backgroundImage: "url(icons/products.svg), url(icons/products2.svg)",
            backgroundPosition: "0 100%, 100% 100%",
            backgroundRepeat: "no-repeat",
            maxWidth: "1420px",
            margin: "0px auto",
          }}
        >
          <Stack direction={"row"} justifyContent={"center"} p={{ xs: 1, md: 0 }}>
            <ProductsSearch />
          </Stack>
        </Stack>
      </Box>
      <Container maxWidth="lg">
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h2">Все продукты</Typography>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
            {skald.skladProduct.map((i) => (
              <Grid item xs={12} sm={6} md={4} key={i.id}>
                <ProductCard products={i} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductsContainer;
