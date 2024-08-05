import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";

interface ServicesCardProps {
  img?: string;
  idx: number;
  title: string;
  text: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ idx, title, text, img }) => {
  return (
    <Stack spacing={2}>
      <Stack
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: img
            ? `url(${img})`
            : 'url("https://i3.wp.com/medrussia.org/wp-content/uploads/2023/01/097bb9bae19d8ac64ca63e264d1ce37d.jpeg")',
        }}
        bgcolor="#F7E3D7"
        position="relative"
        width="100%"
        height={{ xs: "250px", md: "314px" }}
        borderRadius="20px"
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 20,
            right: 40,
            width: 66,
            height: 66,
            bgcolor: "primary.main",
            "&:hover": { bgcolor: "primary.main" },
          }}
        >
          <TrendingFlatIcon sx={{ fill: "#FFF", width: 24 }} />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography variant="h5" color="background.paper">
          0{idx}
        </Typography>
        <Typography variant="h5" color="grey.500">
          /
        </Typography>
        <Stack>
          <Typography variant="h5" color="background.paper">
            {title}
          </Typography>
          <Typography fontSize={{ xs: "18px", md: "19px" }} color="grey.400">
            {text}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicesCard;
