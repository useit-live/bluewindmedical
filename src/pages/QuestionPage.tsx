import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchQuestionnaire from "../services/questionnaireService";
import { Answer, Question } from "../types/types";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import Loader from "../components/Loader";

const QuestionPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    fetchQuestionnaire().then((data) => {
      setQuestions(data);
    });
  }, []);

  const handleOptionSelect = (optionIndex: number) => {
    // Create a new array to avoid mutating the state directly.
    const updatedAnswers = [...answers];
    // Check if the option already exists in the array
    const existingAnswerIndex = updatedAnswers.findIndex(
      (answer) => answer.question === optionIndex
    );

    if (existingAnswerIndex !== -1) {
      // If it exists, increment the count
      updatedAnswers[existingAnswerIndex].count += 1;
    } else {
      // If not, add a new entry for the option
      updatedAnswers.push({ question: optionIndex, count: 1 });
    }
    setAnswers(updatedAnswers);

    const navigateToSummary = () => {
      navigate("/summary", { state: updatedAnswers });
    };

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Ensure state is updated before navigating
      setTimeout(navigateToSummary, 0);
    }
  };

  if (questions.length === 0) return <Loader />;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" gutterBottom>
        American questionnaire
      </Typography>
      <Card sx={{ p: 3 }}>
        <CardHeader title={currentQuestion.question} />
        <CardContent>
          <List>
            {currentQuestion.options.map((option, index) => (
              <ListItem key={index}>
                <ListItemButton onClick={() => handleOptionSelect(index)}>
                  {`${index + 1}: ${option}`}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuestionPage;
