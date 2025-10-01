import type { valueBoxPropType } from "../Types/propTypes";
import { Grid, Fade, Card, CardContent, Box, Typography } from "@mui/material";

export default function ValueBox({
  id,
  title,
  description,
  icon,
  isLoaded,
}: valueBoxPropType) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={id}>
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
          <CardContent sx={{ p: 3, flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
                color: "#333",
              }}
            >
              {icon}
            </Box>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "#333",
                fontSize: "1rem",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "#666", fontSize: "0.875rem" }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Grid>
  );
}
