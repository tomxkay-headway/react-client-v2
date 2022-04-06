import { Box, Container } from "@mui/material";
import logoPhoto from "../../../assets/logo.png";

const Nav = () => {
  return (
    <Container>
      <Box>
        <img src={logoPhoto} alt="logo" />
      </Box>
    </Container>
  );
};

export default Nav;
