import { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Card, Fade } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector, useDispatch } from "react-redux";
import { getValuesUrl } from "../../Redux/store/aboutValues";
import { getTeamMemberUrl } from "../../Redux/store/aboutTeamMembers";
import type { storeType } from "../../Types/storeType";
import ValueBox from "../../Components/ValueBox";
import TeamMemberBox from "../../Components/TeamMemberBox";
import type {
  teamMembersType,
  teamMemberType,
  valuesType,
  valueType,
} from "../../Types/aboutTypes";
export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const values: valuesType = useSelector(
    (state: storeType) => state.aboutValues
  );
  const teamMembers: teamMembersType = useSelector(
    (state: storeType) => state.aboutTeamMembers
  );
  useEffect(() => {
    dispatch(getValuesUrl("url"));
    dispatch(getTeamMemberUrl("url"));
    setIsLoaded(true);
  }, []);

  return (
    <Box sx={{ bgcolor: "#FBFBFB", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#f5f7fa",
          color: "#333",
          pt: { xs: 8, md: 10 },
          pb: { xs: 10, md: 12 },
          textAlign: "center",
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
                About Us
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
                We are a passionate team of tech enthusiasts dedicated to
                bringing you the best products at the best prices.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Fade in={isLoaded} timeout={800}>
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400/?tech-office"
                alt="Our Office"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 1,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                }}
              />
            </Fade>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Fade in={isLoaded} timeout={1000}>
              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    fontFamily: "'Inter', sans-serif",
                    color: "#333",
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "#555", mb: 2, lineHeight: 1.6 }}
                >
                  Founded in 2010, Shopify started as a small online store
                  specializing in smartphones and accessories. Our founder, John
                  Smith, had a vision to create a technology marketplace that
                  combined premium products with exceptional service.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "#555", mb: 2, lineHeight: 1.6 }}
                >
                  Over the years, we've grown into a comprehensive tech
                  retailer, offering everything from laptops and smartphones to
                  smart home devices and wearables. Our team has expanded to
                  over 50 dedicated professionals who share a passion for
                  technology and customer service.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.6 }}
                >
                  Today, we serve thousands of customers worldwide, maintaining
                  the same commitment to quality and service that defined us
                  from day one.
                </Typography>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Our Values */}
      <Box sx={{ bgcolor: "#F5F5F5", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 5,
              fontFamily: "'Inter', sans-serif",
              color: "#333",
              fontSize: { xs: "1.5rem", md: "1.75rem" },
            }}
          >
            Our Values
          </Typography>

          <Grid container spacing={3}>
            {values.map((value: valueType) => (
              <ValueBox
                id={value.id}
                title={value.title}
                description={value.description}
                key={value.id}
                icon={value.icon}
                isLoaded={isLoaded}
              />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 5,
            fontFamily: "'Inter', sans-serif",
            color: "#333",
            fontSize: { xs: "1.5rem", md: "1.75rem" },
          }}
        >
          Meet Our Team
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member: teamMemberType) => (
            <TeamMemberBox
              id={member.id}
              name={member.name}
              position={member.position}
              avatar={member.avatar}
              bio={member.bio}
              isLoaded={isLoaded}
              key={member.id}
            />
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: "#F5F5F5", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 5,
              fontFamily: "'Inter', sans-serif",
              color: "#333",
              fontSize: { xs: "1.5rem", md: "1.75rem" },
            }}
          >
            Get In Touch
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, sm: 4 }}>
              <Fade in={isLoaded} timeout={1000}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                    borderRadius: 1,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 32, color: "#333", mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontSize: "1rem",
                    }}
                  >
                    Call Us
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "#666", fontSize: "0.875rem" }}
                  >
                    +1 (555) 123-4567
                  </Typography>
                </Card>
              </Fade>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Fade in={isLoaded} timeout={1200}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                    borderRadius: 1,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <EmailIcon sx={{ fontSize: 32, color: "#333", mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontSize: "1rem",
                    }}
                  >
                    Email Us
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "#666", fontSize: "0.875rem" }}
                  >
                    info@shopify.com
                  </Typography>
                </Card>
              </Fade>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Fade in={isLoaded} timeout={1400}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                    borderRadius: 1,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 32, color: "#333", mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontSize: "1rem",
                    }}
                  >
                    Visit Us
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "#666", fontSize: "0.875rem" }}
                  >
                    123 Tech Street, San Francisco, CA 94107
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
