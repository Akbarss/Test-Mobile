"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import LazyShow from "../../../core/utils/hooks/lazyShow";

interface CommitmentContainerProps {}

const blueCardStyles = {
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "primary.main",
  width: { xs: "60px", md: "80px" },
  height: { xs: "60px", md: "80px" },
  borderRadius: "15px",
};

const CommitmentContainer: React.FC<CommitmentContainerProps> = () => {
  const { t } = useTranslation("home");

  return (
    <LazyShow>
      <Box width={"100%"} p="40px 0" mt={-1} pt={{ xs: 7, md: 10 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "flex-start", lg: "initial" }}
            spacing={{ xs: 2, md: 4 }}
          >
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <Stack spacing={2}>
                <Typography variant="h1">Our commitment</Typography>
                <Stack spacing={2} direction="row">
                  <Stack sx={blueCardStyles}>
                    <Image width={32} height={32} src="/icons/supplement.svg" alt="" />
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h5">Wide Product Range</Typography>
                    <Typography color="grey.600">
                      Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla.
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Stack sx={blueCardStyles}>
                    <Image width={32} height={32} src="/icons/shield.svg" alt="" />
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h5">Quality Assurance</Typography>
                    <Typography color="grey.600">
                      Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla.
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Stack sx={blueCardStyles}>
                    <Image width={32} height={32} src="/icons/herbal-drug.svg" alt="" />
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h5">Eco-Friendly Practices</Typography>
                    <Typography color="grey.600">
                      Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  'url("https://i3.wp.com/medrussia.org/wp-content/uploads/2023/01/097bb9bae19d8ac64ca63e264d1ce37d.jpeg")',
              }}
              bgcolor="#F7E3D7"
              position="relative"
              width={{ xs: "100%", lg: "40%" }}
              height={{ xs: "420px", md: "524px" }}
              borderRadius="20px"
            ></Stack>
          </Stack>
        </Container>
      </Box>
    </LazyShow>
  );
};

export default CommitmentContainer;
