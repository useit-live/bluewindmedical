import { List, ListItem } from "@mui/material";
import { Answer } from "../types/types";

export default function ListComponent({ answers }: { answers: Answer[] }) {
  return (
    <List>
      {answers.map((answer, i) => (
        <ListItem key={i}>
          {`Option ${answer.question + 1}: ${answer.count} times`}
        </ListItem>
      ))}
    </List>
  );
}
