import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  CircularProgress,
  Fade,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryUrl } from "../../Redux/store/homeCategories";
import { getProductUrl } from "../../Redux/store/homeProducts";
import type { homeCategoryType } from "../../Types/homeTypes";
import type { homeProductType } from "../../Types/homeTypes";
import type { storeType } from "../../Types/storeType";
import CategoryBox from "../../Components/CategoryBox";
import HomeProductBox from "../../Components/HomeProductBox";
import { useNavigate } from "react-router";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const homeCategories = useSelector(
    (state: storeType) => state.homeCategories
  );
  const homeProducts = useSelector((state: storeType) => state.homeProducts);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCategoryUrl("url"));
    dispatch(getProductUrl("url"));
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ bgcolor: "#FBFBFB", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)",
          color: "#333",
          pt: { xs: 8, md: 10 },
          pb: { xs: 10, md: 12 },
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Fade in={isLoaded} timeout={800}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  fontWeight: 600,
                  marginBottom: 2,
                  fontFamily: "'Inter', sans-serif",
                  color: "#333",
                }}
              >
                Welcome to TechShop
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  color: "#555",
                  fontSize: "1rem",
                }}
              >
                Discover the latest tech products at unbeatable prices
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "center",
                  mt: 3,
                }}
              >
                <Button
                  onClick={() => navigate("/shop")}
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: 1,
                    px: 3,
                    py: 1,
                    fontWeight: 500,
                    textTransform: "none",
                    boxShadow: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#111",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  Shop Now
                </Button>
                <Button
                  onClick={() => navigate("/about")}
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: "#333",
                    borderColor: "#333",
                    borderRadius: 1,
                    px: 3,
                    py: 1,
                    fontWeight: 500,
                    textTransform: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#000",
                      backgroundColor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 600,
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
            color: "#333",
          }}
        >
          Browse by Category
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {homeCategories.map((category: homeCategoryType) => (
            <CategoryBox
              name={category.name}
              icon={category.icon}
              description={category.description}
              key={category.id}
              isLoaded
            />
          ))}
        </Grid>
      </Container>

      {/* Featured Products Section */}
      <Box sx={{ bgcolor: "#F5F5F5", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontWeight: 600,
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              color: "#333",
            }}
          >
            Featured Products
          </Typography>

          <Grid container spacing={3}>
            {homeProducts.map((product: homeProductType) => (
              <HomeProductBox
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                isLoaded
                key={product.id}
              />
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              onClick={() => navigate("/shop")}
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#333",
                borderColor: "#333",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: 1,
                px: 3,
                py: 1,
                "&:hover": {
                  borderColor: "#000",
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              View All Products
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Loading Indicator */}
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(255,255,255,0.9)",
            zIndex: 9999,
          }}
        >
          <CircularProgress size={40} sx={{ color: "#333" }} />
        </Box>
      )}
    </Box>
  );
}
