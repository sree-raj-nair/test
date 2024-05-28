import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/nunito";

const theme = createTheme({
  palette: {
    background: {
      default: "#ff5722",
      paper: "#ff5722",
    },
    primary: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
    allVariants: {
      color: "#ffffff",
    },
  },
});

const Logo = styled("img")({
  width: "40px",
  height: "40px",
  marginRight: "10px",
});

const ChamferedImage = styled(Paper)({
  width: "100%",
  height: "auto",
  borderRadius: "50px",
  objectFit: "cover",
  overflow: "hidden",
});

function EtherBallot() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <MuiLink
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Logo src="/images/EtherBallot2bg.png" alt="EtherBallot Logo" />
              <Typography variant="h6" component="div">
                EtherBallot
              </Typography>
            </MuiLink>
            <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
              <MuiLink href="#features" color="inherit" underline="hover">
                Features
              </MuiLink>
              <MuiLink href="#about" color="inherit" underline="hover">
                About
              </MuiLink>
            </Box>
            <Box sx={{ ml: 4, display: "flex", gap: 2 }}>
              <Button variant="contained" color="primary" href="#">
                Login
              </Button>
              <Button variant="outlined" color="primary" href="#">
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flex: 1, bgcolor: "background.paper" }}>
          <Box
            sx={{
              py: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
              bgcolor: "background.paper",
            }}
          >
            <Container>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} lg={8}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography variant="h3" component="h1" fontWeight="bold">
                      EtherBallot
                    </Typography>
                    <Typography variant="h4" component="p" fontWeight="bold">
                      College Elections on Ethereum
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      <Button variant="contained" color="primary" href="#">
                        Sign Up
                      </Button>
                      <Button variant="outlined" color="primary" href="#">
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <ChamferedImage
                    component="img"
                    src="/images/Hero1.jpg"
                    alt="Hero"
                    sx={{
                      width: "100%",
                      height: { xs: "auto", lg: "80%" },
                      borderRadius: 1,
                      objectFit: "cover",
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box
            id="features"
            sx={{ py: { xs: 8, md: 16, lg: 24 }, bgcolor: "background.paper" }}
          >
            <Container>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "inline-block",
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                  }}
                >
                  Secure Voting
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  fontWeight="bold"
                  mt={2}
                >
                  Secure and Transparent Voting
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  maxWidth="900px"
                  mx="auto"
                  mt={2}
                >
                  EtherBallot uses blockchain technology to ensure secure and
                  transparent voting for college elections. Each vote is
                  recorded on the Ethereum blockchain, providing an immutable
                  record and preventing fraud.
                </Typography>
              </Box>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} lg={6}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        Immutable Records
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Each vote is recorded on the Ethereum blockchain,
                        providing an immutable record that cannot be altered.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        Transparency
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        The voting process is fully transparent, allowing anyone
                        to verify the results.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        Fraud Prevention
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        The blockchain technology used by EtherBallot prevents
                        any form of voter fraud or manipulation.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ChamferedImage
                    component="img"
                    src="/images/Features1.jpg"
                    alt="Secure Voting"
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 1,
                      objectFit: "cover",
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box
            id="about"
            sx={{ py: { xs: 8, md: 16, lg: 24 }, bgcolor: "background.paper" }}
          >
            <Container>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "inline-block",
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                  }}
                >
                  About EtherBallot
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  fontWeight="bold"
                  mt={2}
                >
                  Empowering College Elections
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  maxWidth="900px"
                  mx="auto"
                  mt={2}
                >
                  EtherBallot is a decentralized voting platform built on the
                  Ethereum blockchain. Our mission is to empower college
                  students to participate in the democratic process through
                  secure and transparent elections.
                </Typography>
              </Box>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} lg={6}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        Decentralized Platform
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        EtherBallot is built on the Ethereum blockchain,
                        ensuring no single entity has control over the voting
                        process.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        Empowering Students
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Our platform gives college students a voice in the
                        democratic process, enabling them to make their votes
                        count.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        Trusted by Colleges
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        EtherBallot is trusted by colleges and universities
                        across the country to provide secure and transparent
                        elections.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ChamferedImage
                    component="img"
                    src="/images/AboutUs1.jpg"
                    alt="About EtherBallot"
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 1,
                      objectFit: "cover",
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box
            sx={{
              py: { xs: 8, md: 16, lg: 24 },
              borderTop: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Container>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} lg={6}>
                  <Typography variant="h4" component="h2" fontWeight="bold">
                    Empower Your College Elections
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    mt={2}
                    maxWidth="600px"
                  >
                    EtherBallot provides a secure and transparent platform for
                    college elections, empowering students to participate in the
                    democratic process.
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button variant="contained" color="primary" href="#">
                      Sign Up
                    </Button>
                    <Button variant="outlined" color="primary" href="#">
                      Learn more
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
        <Box
          component="footer"
          sx={{
            py: 6,
            borderTop: 1,
            borderColor: "divider",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            px: { xs: 2, md: 6 },
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ flexGrow: 1 }}
          >
            © 2024 EtherBallot. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 4 }}>
            <MuiLink href="#" color="inherit" underline="hover">
              Terms of Service
            </MuiLink>
            <MuiLink href="#" color="inherit" underline="hover">
              Privacy
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default EtherBallot;
