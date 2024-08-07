"use client";

import { Avatar, AvatarGroup, Box, Button, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import { v4 as uuidV4 } from "uuid";
import LazyShow from "../../../core/utils/hooks/lazyShow";
import PharmacyCard from "../../components/cards/PharmacyProductCard";
import { CustomSlider } from "../../components/Carousel/CustomSlider";
import Iconify from "../../components/Icon/Iconify";

const HomePageContainer = () => {
  return (
    <Stack direction={"column"} id="#scroll_to_top" spacing={5} alignItems={"center"}>
      {/* /////// HOME PAGE 1 BLOCK /////// */}
      <Box width={"100%"} bgcolor={"secondary.main"} mt={-1} pt={{ xs: 7, md: 10 }} borderRadius={"0px 0px 20px 20px"}>
        <Container maxWidth="lg">
          <LazyShow>
            <Stack direction={"column"} spacing={1}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 0 }}
                justifyContent={"space-between"}
              >
                <Stack direction={"column"} spacing={2.2}>
                  <Typography variant="h5" color={"#D64779"} fontWeight={600}>
                    Аптечный магазин
                  </Typography>
                  <Typography fontSize={{ xs: "2.2rem", md: "3rem" }} lineHeight={1.3} color={"#000"}>
                    Ваш доверенный <br />
                    Аптечный магазин
                  </Typography>
                  <Typography variant="subtitle1">
                    Libero diam auctor tristique hendrerit in eu vel id. Nec leo
                    <br /> amet suscipit nulla. Nullam vitae sit tempus diam.
                  </Typography>

                  <Box display={{ xs: "block", sm: "none" }}>
                    <Avatar
                      sx={{
                        width: { xs: "100%", md: "420px" },
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "13px",
                      }}
                      src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/629763190PharmacyManager.jpg=ws1280x960"
                    />
                  </Box>

                  <Stack direction={"row"} spacing={2} alignItems={"center"} pb={{ xs: 3, sm: 0, md: 0 }}>
                    <AvatarGroup max={4}>
                      <Avatar alt="Remy Sharp" src="" />
                      <Avatar alt="Travis Howard" src="" />
                      <Avatar alt="Cindy Baker" src="" />
                      <Avatar alt="Agnes Walker" src="" />
                      <Avatar alt="Trevor Henderson" src="" />
                    </AvatarGroup>

                    <Stack direction={"column"}>
                      <Typography variant="subtitle2" color={"#D64779"} fontWeight={700}>
                        100k+
                      </Typography>
                      <Typography variant="subtitle2">Довольные клиенты</Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Box display={{ xs: "none", sm: "block" }}>
                  <Avatar
                    sx={{
                      width: { xs: "100%", md: "420px" },
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "13px 13px 0px 0px",
                    }}
                    src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/629763190PharmacyManager.jpg=ws1280x960"
                  />
                </Box>
              </Stack>
            </Stack>
          </LazyShow>
        </Container>
      </Box>
      {/* /////// HOME PAGE OTHER  /////// */}
      <Container maxWidth="lg">
        <Stack direction={"column"} spacing={5}>
          <LazyShow>
            <Stack direction={"row"} justifyContent={"center"}>
              <Grid container spacing={1.5} justifyContent={"center"}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Stack
                    bgcolor={"#fff"}
                    boxShadow={{ xs: 1, md: 0 }}
                    borderRadius={2}
                    p={1.5}
                    direction={"row"}
                    spacing={2.5}
                  >
                    <Stack>
                      <img src="/icon1.svg" style={{ width: "50px", height: "50px" }} alt="" />
                    </Stack>
                    <Stack direction={"column"} spacing={0.1}>
                      <Typography variant="h5" fontWeight={500}>
                        Free Shipping
                      </Typography>
                      <Typography variant="subtitle1" color={"#676767"}>
                        Order Over $600
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Stack
                    bgcolor={"#fff"}
                    boxShadow={{ xs: 1, md: 0 }}
                    borderRadius={2}
                    p={1.5}
                    direction={"row"}
                    spacing={2.5}
                  >
                    <Stack>
                      <img src="/Icon2.svg" style={{ width: "50px", height: "50px" }} alt="" />
                    </Stack>
                    <Stack direction={"column"} spacing={0.1}>
                      <Typography variant="h5" fontWeight={500}>
                        Quick Payment
                      </Typography>
                      <Typography variant="subtitle1" color={"#676767"}>
                        100% Secure
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Stack
                    bgcolor={"#fff"}
                    boxShadow={{ xs: 1, md: 0 }}
                    borderRadius={2}
                    p={1.5}
                    direction={"row"}
                    spacing={2.5}
                  >
                    <Stack>
                      <img src="/Icon3.svg" style={{ width: "50px", height: "50px" }} alt="" />
                    </Stack>
                    <Stack direction={"column"} spacing={0.1}>
                      <Typography variant="h5" fontWeight={500}>
                        Big Cashback
                      </Typography>
                      <Typography variant="subtitle1" color={"#676767"}>
                        Over 50% Cashback
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Stack
                    bgcolor={"#fff"}
                    boxShadow={{ xs: 1, md: 0 }}
                    borderRadius={2}
                    p={1.5}
                    direction={"row"}
                    spacing={2.5}
                  >
                    <Stack>
                      <img src="/Icon4.svg" style={{ width: "50px", height: "50px" }} alt="" />
                    </Stack>
                    <Stack direction={"column"} spacing={0.1}>
                      <Typography variant="h5" fontWeight={500}>
                        24/7 Support
                      </Typography>
                      <Typography variant="subtitle1" color={"#676767"}>
                        Ready for You
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </LazyShow>
          <Divider sx={{ width: "100%", opacity: ".1" }} />

          <LazyShow>
            <Stack direction={{ sm: "column", md: "row" }} gap={3}>
              <Box
                bgcolor={"secondary.main"}
                boxShadow={1}
                width={"100%"}
                height={"auto"}
                borderRadius={3}
                p={"42px 30px 30px"}
              >
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Stack direction={"column"} spacing={2}>
                    <Typography variant="h5" fontWeight={600}>
                      Большая распродажа
                    </Typography>

                    <Stack direction={"column"} spacing={1}>
                      <Typography variant="h3">Получите дополнительный</Typography>
                      <Typography variant="h3" color={"primary.main"}>
                        50% скидка
                      </Typography>
                    </Stack>

                    <Typography variant="h6" color={"#676767"}>
                      Libero diam auctor tristique
                      <br /> hendrerit in eu vel id.
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), #2f2fd1), url(https://media.graphassets.com/wpWjof6vRHyXGxxfclJ5)`,
                }}
                bgcolor={"primary.800"}
                boxShadow={1}
                width={"100%"}
                height={"auto"}
                borderRadius={3}
                p={"42px 30px 30px"}
              >
                <Stack direction={"column"} spacing={15}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="h4" fontWeight={600} color={"#fff"}>
                      Получите скидку за первое
                      <br />
                      покупки на нашем сайте
                    </Typography>

                    <Avatar
                      sx={{ borderRadius: 0, width: "48px", height: "48px", bgcolor: "inherit" }}
                      src="icons/bg-card-icon.svg"
                    />
                  </Stack>

                  <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="h4" fontWeight={600} color={"#fff"}>
                      30%
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: 10,
                        bgcolor: "#fff",
                        color: "#000",
                        fontWeight: 600,
                        ":hover": { bgcolor: "#fff" },
                      }}
                    >
                      Shop Now
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </LazyShow>

          {/* /////// Home Page Block Featured Pharmacy Essentials   /////// */}
          <Stack pt={2} direction={"column"} spacing={5}>
            <LazyShow>
              <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={2} justifyContent={"space-between"}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h1" lineHeight={1.4}>
                    Featured Pharmacy
                    <br /> Essentials
                  </Typography>
                  <Typography>
                    Libero diam auctor tristique hendrerit in eu vel id.
                    <br /> Nec leo amet suscipit nulla. Nullam vitae sit
                    <br /> tempus diam.
                  </Typography>
                </Stack>

                <Stack direction={"column"} alignItems={"center"}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    border="1px solid #E9E9E9"
                    borderRadius="50%"
                    width={{ xs: "150px", md: "180px" }}
                    height={{ xs: "150px", md: "180px" }}
                  >
                    <Link href="#" style={{ textDecoration: "none", color: "#000" }}>
                      <Typography variant="h5">Все услуги</Typography>
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </LazyShow>

            <LazyShow>
              <Stack
                display={{ xs: "none", md: "flex" }}
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                spacing={3}
              >
                {Array.from(Array(3)).map((i, idx) => {
                  return (
                    <PharmacyCard
                      key={idx}
                      idx={idx + 1}
                      title="Acetaminophen Pills"
                      text="Цены в аптеках"
                      price={"от 20 600 сум"}
                    />
                  );
                })}
              </Stack>
              <Stack display={{ xs: "block", md: "none" }}>
                <CustomSlider>
                  {Array.from(Array(3)).map((i, idx) => {
                    return (
                      <Stack p={"10px"} key={uuidV4()}>
                        <PharmacyCard
                          key={idx}
                          idx={idx + 1}
                          title="Acetaminophen Pills"
                          text="Цены в аптеках"
                          price={"от 20 600 сум"}
                        />
                      </Stack>
                    );
                  })}
                </CustomSlider>
              </Stack>
            </LazyShow>
          </Stack>

          {/* /////// HOME PAGE Pharmacy BOTTOM CARDS  /////// */}
          <LazyShow>
            <Grid container>
              <Grid container spacing={2.5} alignItems={"center"}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Stack
                    sx={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), #2f2fd1), url(https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Pharmacies-in-Dubai-A-02-07-1024x640.jpg)`,
                    }}
                    bgcolor={"primary.800"}
                    boxShadow={1}
                    width={"100%"}
                    borderRadius={3}
                    p={"32px 30px 30px"}
                  >
                    <Stack direction={"column"} spacing={11}>
                      <Stack direction={"row"} justifyContent={"flex-end"}>
                        <Avatar
                          sx={{ borderRadius: 0, width: "48px", height: "48px", bgcolor: "inherit" }}
                          src="icons/bg-card-icon.svg"
                        />
                      </Stack>

                      <Stack direction={"column"} spacing={1.3} color={"#fff"}>
                        <Typography variant="h4">Pain Relievers</Typography>

                        <Typography variant="subtitle1" sx={{ opacity: ".8" }}>
                          Libero diam auctor tristique hendrerit in eu vel id nec leo amet
                        </Typography>

                        <Stack direction={"column"} spacing={0.2}>
                          <Stack direction={"row"} spacing={0.4} alignItems={"center"}>
                            <Typography variant="subtitle1">Explore Categroy</Typography>
                            <Iconify icon="solar:arrow-right-linear" sx={{ color: "#fff", fontSize: "17px" }} />
                          </Stack>
                          <Divider sx={{ borderColor: "#fff", width: "47%" }} />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8}>
                  <Stack
                    sx={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), #5a5aff), url(https://img.freepik.com/free-photo/pharmacy-foreground-with-counter-blurred-backdrop-medicine-shelves-emphasizing-recycled-plastic-bottle-usage_91128-3490.jpg)`,
                    }}
                    bgcolor={"primary.800"}
                    boxShadow={1}
                    width={"100%"}
                    borderRadius={3}
                    p={"32px 30px 30px"}
                  >
                    <Stack direction={"column"} spacing={14}>
                      <Stack direction={"row"} justifyContent={"flex-end"}>
                        <Avatar
                          sx={{ borderRadius: 0, width: "48px", height: "48px", bgcolor: "inherit" }}
                          src="icons/bg-card-icon.svg"
                        />
                      </Stack>

                      <Stack direction={"column"} spacing={1.3} color={"#fff"}>
                        <Typography variant="h4">Pain Relievers</Typography>

                        <Typography variant="subtitle1" sx={{ opacity: ".8" }}>
                          Libero diam auctor tristique hendrerit in eu vel id nec leo amet
                        </Typography>

                        <Stack direction={"column"} spacing={0.2}>
                          <Stack direction={"row"} spacing={0.4} alignItems={"center"}>
                            <Typography variant="subtitle1">Explore Categroy</Typography>
                            <Iconify icon="solar:arrow-right-linear" sx={{ color: "#fff", fontSize: "17px" }} />
                          </Stack>
                          <Divider sx={{ borderColor: "#fff", width: "22%" }} />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={8} lg={8}>
                  <Stack
                    sx={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), #5a5aff), url(https://miro.medium.com/v2/resize:fit:614/1*5QAegNzAUyN9zPXRrOdCuw.jpeg)`,
                    }}
                    bgcolor={"primary.800"}
                    boxShadow={1}
                    width={"100%"}
                    borderRadius={3}
                    p={"32px 30px 30px"}
                  >
                    <Stack direction={"column"} spacing={13}>
                      <Stack direction={"row"} justifyContent={"flex-end"}>
                        <Avatar
                          sx={{ borderRadius: 0, width: "48px", height: "48px", bgcolor: "inherit" }}
                          src="icons/bg-card-icon.svg"
                        />
                      </Stack>

                      <Stack direction={"column"} spacing={1.3} color={"#fff"}>
                        <Typography variant="h4">Pain Relievers</Typography>

                        <Typography variant="subtitle1" sx={{ opacity: ".8" }}>
                          Libero diam auctor tristique hendrerit in eu vel id nec leo amet
                        </Typography>

                        <Stack direction={"column"} spacing={0.2}>
                          <Stack direction={"row"} spacing={0.4} alignItems={"center"}>
                            <Typography variant="subtitle1">Explore Categroy</Typography>
                            <Iconify icon="solar:arrow-right-linear" sx={{ color: "#fff", fontSize: "17px" }} />
                          </Stack>
                          <Divider sx={{ borderColor: "#fff", width: "22%" }} />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Stack
                    sx={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), #2f2fd1), url(https://images.shiksha.com/mediadata/images/articles/1629196020phpVq9gaX.jpeg)`,
                    }}
                    bgcolor={"primary.800"}
                    boxShadow={1}
                    width={"100%"}
                    borderRadius={3}
                    p={"25px 30px 30px"}
                  >
                    <Stack direction={"column"} spacing={11}>
                      <Stack direction={"row"} justifyContent={"flex-end"}>
                        <Avatar
                          sx={{ borderRadius: 0, width: "48px", height: "48px", bgcolor: "inherit" }}
                          src="icons/bg-card-icon.svg"
                        />
                      </Stack>

                      <Stack direction={"column"} spacing={1.3} color={"#fff"}>
                        <Typography variant="h4">Pain Relievers</Typography>

                        <Typography variant="subtitle1" sx={{ opacity: ".8" }}>
                          Libero diam auctor tristique hendrerit in eu vel id nec leo amet
                        </Typography>

                        <Stack direction={"column"} spacing={0.2}>
                          <Stack direction={"row"} spacing={0.4} alignItems={"center"}>
                            <Typography variant="subtitle1">Explore Categroy</Typography>
                            <Iconify icon="solar:arrow-right-linear" sx={{ color: "#fff", fontSize: "17px" }} />
                          </Stack>
                          <Divider sx={{ borderColor: "#fff", width: "47%" }} />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </LazyShow>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomePageContainer;
