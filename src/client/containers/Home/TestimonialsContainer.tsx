"use client";

import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import LazyShow from "../../../core/utils/hooks/lazyShow";

interface TestimonialsContainerProps {}

const blueCardStyles = {
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "primary.main",
  width: { xs: "60px", md: "80px" },
  height: { xs: "60px", md: "80px" },
  borderRadius: "15px",
};

const TestimonialsContainer: React.FC<TestimonialsContainerProps> = () => {
  const { t } = useTranslation("home");

  return (
    <LazyShow>
      <Box width={"100%"} p="40px 0" bgcolor="#FAFAFA" mt={-1} pt={{ xs: 7, md: 10 }}>
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
                  <Typography variant="h4">The Heart of Our Pharmacy</Typography>
                  <Typography fontSize={{ xs: "16px", md: "19px" }} color="grey.500">
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
            <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 7 }} minHeight="300px" width="100%">
              <Stack direction={{ xs: "row", md: "column" }} justifyContent="space-between" alignItems="flex-start">
                <Avatar sx={{ width: "100px", height: "100px" }} src="" />
                <Stack sx={{ transform: "rotate(180deg)", display: { xs: "none", md: "block" } }}>
                  <Image width={48} height={48} alt="" src="icons/bg-card-icon2.svg" />
                </Stack>
              </Stack>
              <Stack spacing={4} maxWidth="600px">
                <Image width={48} height={48} alt="" src="icons/brackets.svg" />
                <Typography variant="h5" sx={{ fontStyle: "italic" }}>
                  "Ishonch Pharm is my go-to for over-the-counter medications and health products. They have a wide
                  selection, and their website makes it easy to order online. The only improvement I'd suggest is
                  expanding their beauty and skincare section."
                </Typography>
                <Stack>
                  <Typography>Theresa J. Jones</Typography>
                  <Typography color="grey.400">24 years old</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </LazyShow>
  );
};

export default TestimonialsContainer;
