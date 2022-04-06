import { Box, Container, Stack, Typography } from "@mui/material";
import toolsPhoto from "../../../assets/tools.png";

const Tool = () => {
  return (
    <Box sx={{ my: 5 }}>
      <Container>
        <Typography sx={{ mb: 5 }} align="center" variant="h6">
          Rebrandly connects to the tools you already use
        </Typography>
        <Stack align="center">
          <img src={toolsPhoto} alt="Rebrandly tools and integrations" />
        </Stack>
        <Typography sx={{ mt: 5 }} align="center">
          <a href="/#"> Discover 100+ integrations</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Tool;
