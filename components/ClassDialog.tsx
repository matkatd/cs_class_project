import React from "react";
import { Dialog, Paper, Typography, Button, Grid } from "@mui/material";
import { Course } from "@/public/types";

type ClassDialogProps = {
  showDialog: boolean;
  onClose: () => void;
  course: Course;
};

export const ClassDialog = ({
  showDialog,
  onClose,
  course,
}: ClassDialogProps) => {
  return (
    <Dialog open={showDialog} onClose={onClose}>
      <Paper sx={{ padding: "1.5rem", position: "relative" }}>
        <Button
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          X
        </Button>
        <Typography mb="1rem" variant="h4" fontWeight={500} fontSize="1rem">
          <h1>
            {course.courseName} - {course.courseTitle}
          </h1>
          <p>{course.description}</p>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <p>
                <strong>Credit Hours:</strong> {course.creditHours}
              </p>
            </Grid>
            <Grid item xs={6}>
              <p>
                <strong>Prerequisites:</strong> {course.prerequisites}
              </p>
            </Grid>
            <Grid item xs={6}>
              <p>
                <strong>Emphasis:</strong> {course.emphasis}
              </p>
            </Grid>
            <Grid item xs={6}>
              <p>
                <strong>Ranking:</strong> {course.ranking}
              </p>
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    </Dialog>
  );
};
