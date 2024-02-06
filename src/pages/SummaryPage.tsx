import React from "react";
import { useLocation } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { Answer } from "../types/types";
import { Card, CardContent, CardHeader } from "@mui/material";

const SummaryPage: React.FC = () => {
  const location = useLocation();
  const answers = location?.state as Answer[];

  // Assuming the "question" property represents the option index
  const data = answers.map((answer, index) => ({
    title: `Option ${answer.question + 1}: ${answer.count} times`,
    value: answer.count,
    color: ["#E38627", "#C13C37", "#6A2135", "#A0D2DB"][answer.question],
  }));

  return (
    <Card sx={{ width: "600px", p: 3 }}>
      <CardHeader title="Answers Summary" />
      <CardContent>
        <PieChart data={data} />
      </CardContent>
    </Card>
  );
};

export default SummaryPage;
