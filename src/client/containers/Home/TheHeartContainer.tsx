"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidV4 } from "uuid";
import LazyShow from "../../../core/utils/hooks/lazyShow";
import TeamCard from "../../components/cards/TeamCard";
import { CustomSlider } from "../../components/Carousel/CustomSlider";

interface HeartContainerProps {}

const blueCardStyles = {
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "primary.main",
  width: { xs: "60px", md: "80px" },
  height: { xs: "60px", md: "80px" },
  borderRadius: "15px",
};

const HeartContainer: React.FC<HeartContainerProps> = () => {
  const { t } = useTranslation("home");

  return (
    <LazyShow>
      <Box width={"100%"} p="40px 0" mt={-1} pt={{ xs: 7, md: 10 }}>
        <Container maxWidth="lg">
          <Stack width="100%" spacing={4}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              alignItems={{ xs: "center", lg: "initial" }}
              justifyContent={{ xs: "initial", lg: "space-between" }}
              spacing={{ xs: 2, md: 4 }}
            >
              <Stack direction={{ xs: "column", md: "row" }} spacing={2} maxWidth="420px">
                <Stack spacing={2}>
                  <Typography variant="h1">The Heart of Our Pharmacy</Typography>
                  <Typography fontSize={{ xs: "16px", md: "17px" }} color="grey.500">
                    Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla. Nullam vitae sit
                    tempus diam.
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="row" width="100%" justifyContent={{ xs: "center", md: "flex-end" }} alignItems="center">
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid #EDEDED"
                  borderRadius="50%"
                  width={{ xs: "150px", md: "180px" }}
                  height={{ xs: "150px", md: "180px" }}
                >
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <Typography variant="h5" color="grey.800">
                      {t("all_services")}
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
            <Stack width="100%">
              <CustomSlider>
                {Array.from(Array(3)).map((i, idx) => {
                  return (
                    <Stack p={"10px"} key={uuidV4()}>
                      <TeamCard role={"Chief Pharmacist"} name={"Dr. Emily Roberts, PharmD"} experience={21} />
                    </Stack>
                  );
                })}
              </CustomSlider>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </LazyShow>
  );
};

export default HeartContainer;
