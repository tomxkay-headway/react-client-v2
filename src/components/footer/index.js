import { Box, Container, Stack, Typography } from "@mui/material";

const Tool = () => {
  return (
    <Box sx={{ background: "#595d66", p: 2, color: "#fff" }}>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row">
            <Typography variant="caption" sx={{ mr: 1 }}>
              Terms & Conditions
            </Typography>
            <Typography variant="caption" sx={{ mr: 1 }}>
              Privacy Policy
            </Typography>
            <Typography variant="caption" sx={{ mr: 1 }}>
              Cookie Policy
            </Typography>
          </Stack>
          <Box>
            <Typography variant="caption">Rebrandy Copyright 2020</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Tool;
