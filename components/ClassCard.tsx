import { Course } from "@/public/types";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type ClassCardProps = {
  classObj: Course;
};

export const ClassCard = ({ classObj }: ClassCardProps) => (
  <Card sx={{ height: "11rem" }}>
    <CardContent>
      <Typography fontSize={"1.3rem"}>
        {classObj.courseName} - {classObj.courseTitle}
      </Typography>
      <Typography>Credits: {classObj.creditHours}</Typography>
    </CardContent>
  </Card>
);
