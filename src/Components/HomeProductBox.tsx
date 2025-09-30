import type { homeProductType } from "../Types/homeProductsType";
import {
  Grid,
  Fade,
  Card,
  Box,
  Typography,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

export default function HomeProductBox({
  name,
  image,
  description,
  price,
  isLoaded,
}: homeProductType & { isLoaded: boolean }) {
  return (
    <Grid>
      <Fade in={isLoaded}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            borderRadius: 1,
            overflow: "hidden",
            boxShadow: "none",
            border: "1px solid rgba(0,0,0,0.08)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            },
          }}
        >
          <CardMedia component="img" height="200" image={image} alt={name} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                mb: 1,
                color: "#333",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", mb: 2, fontSize: "0.875rem" }}
            >
              {description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                ${price}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#333",
                  borderColor: "#333",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: 1,
                  "&:hover": {
                    borderColor: "#000",
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Grid>
  );
}
