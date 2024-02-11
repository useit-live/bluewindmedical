import React from "react";
import { useLocation } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { Answer } from "../types/types";
import { Card, CardContent, CardHeader } from "@mui/material";
// import ListComponent from "../components/List";

const SummaryPage: React.FC = () => {
  const location = useLocation();
  const answers = location?.state as Answer[];

  if (!answers) {
    return <div>Nothing to show...</div>;
  }
  // Assuming the "question" property represents the option index
  const data = answers.map((answer, index) => ({
    title: `Question ${answer.question + 1}`,
    value: answer.count,
    color: ["#E38627", "#C13C37", "#6A2135", "#A0D2DB"][answer.question],
  }));

  return (
    <Card sx={{ p: 3 }}>
      <CardHeader
        title="Answers Summary"
        // subheader={<ListComponent answers={answers} />}
      />
      <CardContent>
        <PieChart
          data={data}
          animate
          labelStyle={{ fontSize: "5px" }}
          label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
        />
      </CardContent>
    </Card>
  );
};

export default SummaryPage;
