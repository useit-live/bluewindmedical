import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchQuestionnaire from "../services/questionnaireService";
import { Answer, Question } from "../types/types";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

const QuestionPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestionnaire().then((data) => {
      setQuestions(data);
    });
  }, []);

  const handleOptionSelect = (optionIndex: number) => {
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

  if (questions.length === 0)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card sx={{ width: "600px" }}>
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
  );
};

export default QuestionPage;
