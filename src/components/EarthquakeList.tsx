import { useCallback, useMemo, useState } from "react";
// mui
import { Box, Grid, Pagination, Stack } from "@mui/material";
// types
import { Earthquake } from "../models/types";
// components
import EarthquakeCard from "./EarthquakeCard";

interface EarthquakeListProps {
  earthquakes: Earthquake[];
}
const EarthquakeList: React.FC<EarthquakeListProps> = ({ earthquakes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, newPage: number) => {
      setCurrentPage(newPage);
    },
    [setCurrentPage]
  );

  const displayedEarthquakes = useMemo(
    () =>
      earthquakes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ),
    [currentPage, earthquakes]
  );

  return (
    <Stack direction="column" alignItems="center">
      <Grid container spacing={2} marginBottom={2}>
        {displayedEarthquakes.map((earthquake) => (
          <Grid item xs={12} sm={6} md={4} key={earthquake.id}>
            <Box mb={2} height={300}>
              <EarthquakeCard earthquake={earthquake} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(earthquakes.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
};

export default EarthquakeList;
