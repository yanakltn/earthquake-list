import React, { useContext } from "react";
// context
import { EarthquakeContext } from "./context/EarthquakeContext";
// components
import EarthquakeList from "./components/EarthquakeList";
// mui
import { Box, CircularProgress, Container } from "@mui/material";
// styles
import { StyledBox, StyledHeading } from "./styles";

const App: React.FC = () => {
  const { earthquakes = [], isLoading = true } =
    useContext(EarthquakeContext) || {};

  return (
    <StyledBox>
      <Container maxWidth="lg">
        <Box alignItems="center" display="flex" flexDirection="column">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Box>
              <StyledHeading variant="h2">USGS Earthquakes</StyledHeading>
              <EarthquakeList earthquakes={earthquakes} />
            </Box>
          )}
        </Box>
      </Container>
    </StyledBox>
  );
};

export default App;
