import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";
import SummaryPage from "./pages/SummaryPage";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 1,
          m: 1,
        }}
      >
        <Typography variant="h4" gutterBottom>
          American questionnaire
        </Typography>
        <Router>
          <Routes>
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/" element={<QuestionPage />} />
          </Routes>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
