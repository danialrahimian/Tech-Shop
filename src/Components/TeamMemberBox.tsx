import {
  Grid,
  CardContent,
  Fade,
  Card,
  Avatar,
  Typography,
} from "@mui/material";
import type { teamMemberBoxPropType } from "../Types/propTypes";

export default function TeamMemberBox({
  name,
  position,
  avatar,
  bio,
  isLoaded,
}: teamMemberBoxPropType) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <Fade in={isLoaded} timeout={1000}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 1,
            boxShadow: "none",
            border: "1px solid rgba(0,0,0,0.08)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
            }}
          >
            <Avatar
              src={avatar}
              alt={name}
              sx={{
                width: 100,
                height: 100,
                mb: 2,
                border: "3px solid #fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#333",
                fontSize: "1rem",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 2,
                color: "#666",
                fontSize: "0.875rem",
              }}
            >
              {position}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "#666", fontSize: "0.875rem" }}
            >
              {bio}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Grid>
  );
}
