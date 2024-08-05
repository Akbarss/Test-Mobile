"use client";

import i18nConfig from "@/i18nConfig";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popper from "@mui/material/Popper";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ApplicationChangeLanguage(props: { mobile?: boolean; isMain?: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { locale } = useParams();
  const currentLocale = i18n.language;
  const currentPathname = usePathname();

  const [language, setLanguage] = useState<string | string[]>(locale);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const handleChangeLanguage = (e: string) => {
    const newLocale = e;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;
    setLanguage(e);

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };
  return (
    <>
      <ButtonGroup
        aria-controls={open ? "split-button-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleToggle}
        ref={anchorRef}
        sx={{ height: 37, bgcolor: "none" }}
        color="inherit"
      >
        <Button
          size="small"
          sx={{
            bgcolor: "none",
            fontSize: "18px",
            fontWeight: "400",
            textTransform: "capitalize",
            color: props.isMain ? "#000" : "#fff",
          }}
          variant="text"
        >
          {language}
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1, pt: 1, pr: 2, overflow: "hidden", width: "auto" }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Stack sx={{ bgcolor: "#1246FF", opacity: "10%", borderRadius: "12px" }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  <MenuItem onClick={() => handleChangeLanguage("uz")}>
                    <Stack gap="5px" direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle1" color={language === "uz" ? "#fff" : "#D6E3FF"}>
                        Uz
                      </Typography>
                    </Stack>
                  </MenuItem>
                  <MenuItem onClick={() => handleChangeLanguage("ru")}>
                    <Stack gap="5px" direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle1" color={language === "ru" ? "#fff" : "#D6E3FF"}>
                        Ru
                      </Typography>
                    </Stack>
                  </MenuItem>
                  <MenuItem onClick={() => handleChangeLanguage("en")}>
                    <Stack gap="5px" direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle1" color={language === "en" ? "#fff" : "#D6E3FF"}>
                        En
                      </Typography>
                    </Stack>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Stack>
          </Grow>
        )}
      </Popper>
    </>
  );
}
