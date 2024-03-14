import { Course } from "@/public/types";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { ClassDialog } from "./ClassDialog";

type ClassCardProps = {
  classObj: Course;
};

export const ClassCard = ({ classObj }: ClassCardProps) => {
  const [showDialog, setShowDialog] = React.useState(false);
  return (
    <Card>
      <CardContent sx={{ height: "6rem", pb: "2rem" }}>
        <Typography fontSize={"1.3rem"}>
          {classObj.courseName} - {classObj.courseTitle}
        </Typography>
        <Typography>Credits: {classObj.creditHours}</Typography>
        <Typography>Student Ranking: {classObj.ranking}/5</Typography>
      </CardContent>
      <CardActionArea
        sx={{ background: "#0057B8", borderRadius: "0 0 2px 2px" }}
        onClick={() => {
          setShowDialog(!showDialog);
        }}
      >
        <CardContent>
          <Typography color="whitesmoke">See More</Typography>
        </CardContent>
      </CardActionArea>
      <ClassDialog
        showDialog={showDialog}
        course={classObj}
        onClose={setShowDialog}
      ></ClassDialog>
    </Card>
  );
};
