import { Box, Button, Container, Grid, Typography } from "@mui/material";
import personPhoto from "../../../assets/person.png";
import style from "./hero.module.css";

const Hero = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Box sx={{ minHeight: "60vh" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={4}
          className={style.heroGridContainer}
        >
          <Grid item xs={12} sm={12} md={7}>
            <Typography
              variant="h4"
              sx={{
                color: "#212732",
                "@media screen and (max-width: 900px)": {
                  textAlign: "center"
                }
              }}
            >
              Your Brand on Your Links
            </Typography>
            <Typography variant="body2" sx={{ my: 3, color: "#595d66" }}>
              Rebrandly is the industry-leading management platform to brand,
              track and share short URLs using a custom domain name
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Button fullWidth sx={{ mr: 2 }} variant="contained">
                  Sign up free
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button fullWidth variant="outlined">
                  Request a demo
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <img
                width="100%"
                src={personPhoto}
                alt="Guy with glasses looking to his left"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Hero;
