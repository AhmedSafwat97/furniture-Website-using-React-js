import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import SwiperSection from "./SwiperSection";

export default function Productsection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        sx={{
          bgcolor: "#F3F2EE",
          paddingX: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "470px",
        }}
      >
        <Box sx={{ transform: "translateY(40px)", width: "75%" }}>
          <Typography
            sx={{ fontWeight: "900", width: "100%" }}
            variant={isSmallScreen ? "h5" : "h4"}
          >
            Featured Products
          </Typography>
        </Box>

        <SwiperSection />
      </Box>
    </>
  );
}
