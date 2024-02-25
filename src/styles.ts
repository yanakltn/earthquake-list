import backgroundImage from "./assets/background.webp";
import { Box, Typography, styled } from "@mui/material";

export const StyledBox = styled(Box)({
  minHeight: "100vh",
  background: `url("${backgroundImage}") 50% / cover repeat`,
  display: "flex",
  alignItems: "center",
  padding: "2rem 0",
});

export const StyledHeading = styled(Typography)({
  textAlign: "center",
  marginBottom: "2rem",
  color: "rgb(28, 79, 107)",
  fontWeight: 500,
});
