import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Chip, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { getYearsWord } from "../../../core/utils/WordsGrammar";

interface TeamCardProps {
  img?: string;
  role: string;
  name: string;
  experience: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ role, name, experience, img }) => {
  const { t, i18n } = useTranslation("home");

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
        height={{ xs: "350px", md: "414px" }}
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
      <Stack>
        <Stack mb="7px" alignItems="flex-start">
          <Chip label={role} sx={{ border: "1px solid #EDEDED", color: "grey.500" }} variant="outlined" />
        </Stack>
        <Typography variant="h5">{name}</Typography>
        <Typography fontSize="16px" color="grey.500" fontWeight={400}>
          {t("work_experience")} - {experience} {getYearsWord(experience, i18n.language)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TeamCard;
