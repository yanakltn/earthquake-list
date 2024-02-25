// mui
import { CardContent, CardHeader, Link, Typography } from "@mui/material";
// styles
import { StyledCard } from "./styles";
// types
import { Earthquake } from "../models/types";

interface EarthquakeCardProps {
  earthquake: Earthquake;
}

const EarthquakeCard: React.FC<EarthquakeCardProps> = ({ earthquake }) => {
  const date = new Date(earthquake.properties.time);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={600}>
            {earthquake.properties.title}
          </Typography>
        }
        subheader={formattedDate}
      />
      <CardContent>
        <Typography>
          <Typography>Magnitude: {earthquake.properties.mag}</Typography>
          <Typography>Location: {earthquake.properties.place}</Typography>
          <Typography>
            Date & Time: {formattedDate} at {formattedTime}
          </Typography>
          <Typography>Status: {earthquake.properties.status}</Typography>
          <Typography>
            More info: <Link href={earthquake.properties.url}>USGS</Link>
          </Typography>
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default EarthquakeCard;
