import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Iconify from "../Icon/Iconify";

interface PharmacyCardProps {
  products: IProducts | any;
}

const ProductCard: React.FC<PharmacyCardProps> = (props) => {
  return (
    <Stack spacing={2} width={"100%"} bgcolor={"#fff"}>
      <Stack
        sx={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: props.products.img
            ? `url(${props.products.img})`
            : 'url("https://apteka.uz/upload/iblock/a56/a56f4391152f9f2cc9781c8ae62001ae.png")',
          objectFit: "contain",
        }}
        position="relative"
        width="100%"
        bgcolor={"#F9F9F9"}
        height={{ xs: "250px", md: "320px" }}
        borderRadius="10px"
      >
        <IconButton
          className="glass18"
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 60,
            height: 60,
            border: "1px solid #9D9D9D",
            color: "#5d5c5c",
            bgcolor: "#d6e3ffa3",

            "&:hover": { bgcolor: "primary.main", color: "#fff", border: "none" },
          }}
        >
          <Iconify icon="bi:arrow-right" sx={{ width: 24 }} />
        </IconButton>
      </Stack>

      <Stack direction={"column"} spacing={1} pl={1}>
        <Typography variant="h6">{props.products.name}</Typography>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Stack>
            <Typography variant="subtitle1">{props.products.manufacturer}</Typography>
            <Typography variant="subtitle1">{props.products.price}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
