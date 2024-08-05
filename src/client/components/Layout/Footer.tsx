import NorthIcon from "@mui/icons-material/North";
import { Chip, Container, Divider, IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation("layout");
  return (
    <Stack bgcolor={"primary.main"} p="20px 0" width={"100%"}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 2, md: 4 }}>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2} alignItems="center">
              <Image src="/logo-white.svg" alt="logo" width={50} height={50} />
              <Stack>
                <Typography variant="h5" lineHeight="25px" color="background.paper">
                  Ishonch
                </Typography>
                <Typography color="grey.300">Pharm</Typography>
              </Stack>
            </Stack>
            <Stack>
              <Link activeClass="active" to={"#scroll_to_top"} spy={true} smooth={true} offset={-70} duration={500}>
                <IconButton
                  sx={{
                    width: "50px",
                    height: "50px",
                    bgcolor: "background.paper",
                    "&:hover": { bgcolor: "grey.200" },
                  }}
                >
                  <NorthIcon sx={{ fill: "#1246FF" }} />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
          <Divider sx={{ borderColor: "#3C7FFF" }} />
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            spacing={3}
            width="100%"
          >
            <Stack justifyContent={{ xs: "center", md: "flex-start" }} direction="row" spacing={4}>
              <List>
                <ListItem>
                  <Typography color="background.paper" variant="h5">
                    {t("company")}
                  </Typography>
                </ListItem>
                <ListItem>
                  <NextLink style={{ textDecoration: "none" }} href="#">
                    <Typography color="grey.200">{t("about_us")}</Typography>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink style={{ textDecoration: "none" }} href="#">
                    <Typography color="grey.200">{t("products")}</Typography>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink style={{ textDecoration: "none" }} href="#">
                    <Typography color="grey.200">{t("services")}</Typography>
                  </NextLink>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Typography color="background.paper" variant="h5">
                    {t("resources")}
                  </Typography>
                </ListItem>
                <ListItem>
                  <NextLink style={{ textDecoration: "none" }} href="#">
                    <Typography color="grey.200">{t("educational")}</Typography>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink style={{ textDecoration: "none" }} href="#">
                    <Typography color="grey.200">{t("mental_health_resources")}</Typography>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink style={{ textDecoration: "none" }} href="#">
                    <Typography color="grey.200">{t("nutrition")}</Typography>
                  </NextLink>
                </ListItem>
              </List>
            </Stack>
            <Stack alignItems={{ xs: "center", md: "flex-end" }} spacing={1}>
              <Typography color="background.paper" variant="h5">
                {t("follow_our_social_media")}
              </Typography>
              <Stack
                direction="row"
                gap={0.61}
                justifyContent={{ xs: "center", md: "flex-end" }}
                maxWidth={300}
                flexWrap="wrap"
              >
                <NextLink href="#">
                  <Chip label="Instagram" sx={{ border: "none", bgcolor: "#000", color: "#fff" }} variant="outlined" />
                </NextLink>
                <NextLink href="#">
                  <Chip label="Youtube" sx={{ border: "none", bgcolor: "#000", color: "#fff" }} variant="outlined" />
                </NextLink>
                <NextLink href="#">
                  <Chip label="Facebook" sx={{ border: "none", bgcolor: "#000", color: "#fff" }} variant="outlined" />
                </NextLink>
                <NextLink href="#">
                  <Chip label="LinkedIn" sx={{ border: "none", bgcolor: "#000", color: "#fff" }} variant="outlined" />
                </NextLink>
                <NextLink href="#">
                  <Chip label="Twitter" sx={{ border: "none", bgcolor: "#000", color: "#fff" }} variant="outlined" />
                </NextLink>
                <NextLink href="#">
                  <Chip label="Tik Tok" sx={{ border: "none", bgcolor: "#000", color: "#fff" }} variant="outlined" />
                </NextLink>
              </Stack>
            </Stack>
          </Stack>
          <Divider sx={{ borderColor: "#3C7FFF" }} />

          <Stack width="100%">
            <Typography fontSize="14px" color="grey.400">
              Copyright © 2024 Ishonch Pharm
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
