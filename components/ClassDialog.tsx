import { Course } from "@/public/types";
import { Dialog, Paper } from "@mui/material";
import React from "react";

type ClassDialogProps = {
  showDialog: boolean;
  course: Course;
};

export const ClassDialog = ({ showDialog, course }: ClassDialogProps) => {
  return (
    <Dialog open={showDialog}>
      <Paper>
        <h1>{course.courseName}</h1>
        <p>Dialog Content</p>
      </Paper>
    </Dialog>
  );
};
