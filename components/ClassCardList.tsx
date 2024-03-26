// @ts-nocheck
import { Course } from "@/public/types";
import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
import { ClassCard } from "./ClassCard";
import { InView } from "react-intersection-observer";
import { toCamelCase } from "@/utils/utils";

type ClassCardListProps = {
  courses: Course[];
  categoryName: string;
  setActiveId: (id: string) => void;
};

export const ClassCardList = ({
  courses,
  categoryName,
  setActiveId,
}: ClassCardListProps) => {
  const emphasis = useMemo(() => {
    return toCamelCase(categoryName);
  }, [categoryName]);

  return (
    <Container sx={{ mb: "3rem", mt: "3rem" }}>
      <div id={emphasis}>
        <InView
          as="div"
          onChange={(inView, entry) => {
            if (inView) {
              setActiveId(categoryName);
            }
          }}
        >
          <Typography
            mb="1rem"
            variant="h4"
            fontWeight={500}
            sx={{
              scrollMarginTop: "1rem",
              paddingTop: "1rem",
              marginTop: "-1rem",
            }}
          >
            {categoryName}
          </Typography>
        </InView>
      </div>
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
