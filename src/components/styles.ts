import { Card, styled } from "@mui/material";

export const StyledCard = styled(Card)({
  height: 300,
  borderRadius: 5,
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#f2fbff",
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.3)",
    transform: "scale(1.02)",
    cursor: "pointer",
  },
});
