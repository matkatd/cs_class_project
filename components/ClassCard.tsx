import { Course } from "@/public/types";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

type ClassCardProps = {
  classObj: Course;
};

export const ClassCard = ({ classObj }: ClassCardProps) => (
  <Card>
    <CardContent sx={{ height: "6rem", pb: "2rem" }}>
      <Typography fontSize={"1.3rem"}>
        {classObj.courseName} - {classObj.courseTitle}
      </Typography>
      <Typography>Credits: {classObj.creditHours}</Typography>
      <Typography>Student Ranking: {classObj.ranking}/5</Typography>
    </CardContent>
    <CardActionArea sx={{ background: "#0057B8", borderRadius: "0 0 2px 2px" }}>
      <CardContent>
        <Typography color="whitesmoke">See More</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
