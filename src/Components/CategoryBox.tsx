import type { categoryBoxPropType } from "../Types/propTypes";
import { Grid, Zoom, Card, Box, Typography } from "@mui/material";
export default function CategoryBox({
  name,
  icon,
  description,
  isLoaded,
}: categoryBoxPropType) {
  return (
    <Grid>
      <Zoom in={isLoaded}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            borderRadius: 1,
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              color: "#333",
            }}
          >
            {icon}
          </Box>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 600, fontSize: "1rem", color: "#333" }}
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              textAlign: "center",
              fontSize: "0.875rem",
            }}
          >
            {description}
          </Typography>
        </Card>
      </Zoom>
    </Grid>
  );
}
