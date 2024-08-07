import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper, Stack } from "@mui/material";

const ProductsSearch = () => {
  return (
    <Stack direction={"column"} alignItems={"center"} width="100%" marginTop={2.2}>
      <Paper
        component="form"
        sx={{
          p: "2px 15px",
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", sm: "100%", md: "800px" },
          height: "66px",
          borderRadius: "35px",
          boxShadow: 4,
        }}
      >
        <IconButton
          type="submit"
          sx={{
            p: "10px",
            bgcolor: "secondary.main",
            color: "#fff",
            ":hover": { bgcolor: "#D7DAF9", color: "#fff" },
          }}
        >
          <SearchIcon sx={{ width: 28, height: 28 }} />
        </IconButton>
        <InputBase
          sx={{ ml: 2, flex: 2, color: "#000", padding: "0px 1px" }}
          placeholder={"Поиск продуктов"}
          type={"search"}
        />
      </Paper>
    </Stack>
  );
};

export default ProductsSearch;
