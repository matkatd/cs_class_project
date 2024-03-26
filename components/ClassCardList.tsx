// @ts-nocheck
import { Course } from "@/public/types";
import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { ClassCard } from "./ClassCard";

type ClassCardListProps = {
  courses: Course[];
  categoryName: string;
};

export const ClassCardList = ({
  courses,
  categoryName,
}: ClassCardListProps) => {
  return (
    <Container sx={{ mb: "3rem", mt: "3rem" }}>
      <Typography
        id={categoryName}
        mb="1rem"
        variant="h4"
        fontWeight={500}
        sx={{ scrollMarginTop: "1rem", paddingTop: "1rem", marginTop: "-1rem" }}
      >
        {categoryName}
      </Typography>
      <Grid
        container
        wrap="wrap"
        spacing={5}
        sx={{
          "@media (max-width: 600px)": {
            justifyContent: "center",
            gap: "1rem",
          },
        }}
      >
        {courses.map((course) => (
          <Grid xs={8} sm={6} md={4} item key={course.courseName}>
            <ClassCard classObj={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
