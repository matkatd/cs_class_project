import { ClassObj } from "@/public/types";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type ClassCardProps = {
  classObj: ClassObj;
};

export const ClassCard = ({ classObj }: ClassCardProps) => (
  <Card>
    <CardContent>
      <Typography variant="h5">
        {classObj.courseName} - {classObj.courseTitle}
      </Typography>
      <Typography variant="body1">{classObj.description}</Typography>
    </CardContent>
  </Card>
);
