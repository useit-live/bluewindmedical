import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";
import SummaryPage from "./pages/SummaryPage";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<QuestionPage />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
