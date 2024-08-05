import CloseIcon from "@mui/icons-material/Close";
import { Button, Link, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useTranslation } from "react-i18next";

import ApplicationChangeLanguage from "../../ChangeLang";
import Iconify from "../../Icon/Iconify";
import { HeaderLink } from "../Header";

export default function MobileHeader() {
  const { t } = useTranslation("");

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)} size="large" edge="start" aria-label="menu" sx={{ color: "#06314D" }}>
        <Iconify icon="mingcute:menu-fill" sx={{ fontSize: "30px", color: "#1246FF" }} />
      </IconButton>

      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Box>
          <List>
            <Stack p={"4px 19px"} direction={"row"} justifyContent="space-between" alignItems={"center"}>
              <Box>
                <Link href="/" style={{ cursor: "pointer" }}>
                  <img src={"/logo.svg"} alt="logo" style={{ height: "40px", width: "40px", cursor: "pointer" }} />
                </Link>
              </Box>
              <Box>
                <IconButton onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
                  <CloseIcon sx={{ color: "#1A1A1A" }} />
                </IconButton>
              </Box>
            </Stack>
            <Box width="100%" display={"flex"} flexDirection={"column"} gap={0.4} p={"5px 10px"}>
              <ListItem>
                <HeaderLink link="/" name={"Home"} />
              </ListItem>

              <ListItem>
                <HeaderLink link="/all-centers" name={"Products"} />
              </ListItem>

              <ListItem>
                <HeaderLink link="/categories" name={"Pricing"} />
              </ListItem>

              <ListItem>
                <HeaderLink link="/blog" name={"Services"} />
              </ListItem>

              <ListItem>
                <HeaderLink link="/blog" name={"Contact Us"} />
              </ListItem>

              <Box display={"flex"} flexDirection={"column"} gap={1} pt={1.5}>
                <Divider sx={{ opacity: ".2" }} />
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} pt={1} pr={1}>
                  <a href="tel:+998917777777">
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#1246FF", borderRadius: 20, ":hover": { bgcolor: "#1246FF" } }}
                    >
                      +998 91 777 77 77
                    </Button>
                  </a>
                  <ApplicationChangeLanguage isMain />
                </Stack>
              </Box>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
