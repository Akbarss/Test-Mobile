"use client";

import { Box, Button, Container, Link, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { UrlObject } from "url";
import "../../../scss/global.css";
import ApplicationChangeLanguage from "../ChangeLang";
import { NavigationLink } from "../custom/NavigationLink";
import MobileHeader from "./Mobile/MobileHeader";

export function HeaderLink(props: { link: string | UrlObject; name: string; color?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <NavigationLink href={props.link} style={{ textDecoration: "none" }}>
      <Stack>
        <Typography
          textAlign={"center"}
          sx={{
            cursor: "pointer",
            color: router == props.link ? "#7C87F1" : " #1A1A1A",
          }}
        >
          {props.name}
        </Typography>
      </Stack>
    </NavigationLink>
  );
}

interface Props {
  window?: () => Window;
  children?: React.ReactElement | any;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="glass18" sx={{ bgcolor: "#8badf6", boxShadow: 0 }}>
          <Container maxWidth="lg">
            <Stack
              p={1.5}
              pb={0.5}
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack>
                <Link href="/" style={{ cursor: "pointer" }}>
                  <img src={"/logo.svg"} alt="logo" style={{ height: "50px", width: "50px", cursor: "pointer" }} />
                </Link>
              </Stack>

              <Box display={{ xs: "none", md: "flex" }} gap={3.5}>
                <HeaderLink link="/" name={"Главная"} />

                <HeaderLink link="/products" name={"Продукты"} />

                <HeaderLink link="/" name={"О нас"} />
              </Box>

              <Box display={{ xs: "none", md: "flex" }} gap={1.5}>
                <a href="tel:+998917777777">
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#1246FF", borderRadius: 20, ":hover": { bgcolor: "#1246FF" } }}
                  >
                    +998 91 777 77 77
                  </Button>
                </a>
                <ApplicationChangeLanguage isMain />
              </Box>

              <Box display={{ xs: "flex", md: "none" }}>
                <MobileHeader />
              </Box>
            </Stack>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
