import { Course } from "@/public/types";
import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { ClassCard } from "./ClassCard";

type ClassCardListProps = {
  courses: Course[];
  categoryName: string;
};

export const ClassCardList = ({
  courses,
  categoryName,
}: ClassCardListProps) => (
  <Container>
    <Typography mb="1rem" variant="h4">
      {categoryName}
    </Typography>
    <Grid container wrap="wrap" spacing={5}>
      {courses.map((course) => (
        <Grid xs={4} item key={course.courseName}>
          <ClassCard classObj={course} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
