import React from "react";
import { Dialog, Paper, Typography, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Course } from "@/public/types";

type ClassDialogProps = {
  showDialog: boolean;
  course: Course;
  onClose: (showDialog: boolean) => void;
};

export const ClassDialog = ({
  showDialog,
  course,
  onClose,
}: ClassDialogProps) => {
  const closeDialog = () => {
    onClose(!showDialog);
  };

  return (
    <Dialog open={showDialog}>
      <Paper sx={{ padding: "1.5rem", position: "relative" }}>
        <Button
          onClick={closeDialog}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "0.5rem",
          }}
        >
          <CloseIcon />
        </Button>
        <Typography mb="1rem" variant="h4" fontWeight={500} fontSize="1rem">
          <h1>
            {course.courseName} - {course.courseTitle}
          </h1>
          <p style={{ color: "#444444" }}>{course.description}</p>
          <Grid container width={"75%"} sx={{ color: "#444444" }}>
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
