import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loader() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4" gutterBottom>
        One moment...
      </Typography>
      <CircularProgress />
    </Box>
  );
}
