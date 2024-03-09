"use client";
import { ClassCardList } from "@/components/ClassCardList";
import { Course } from "@/public/types";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

type MainPageProps = {};
type EmphasisGroup = {
  emphasis: string;
  courses: Course[];
};

const MainPage = ({}: MainPageProps) => {
  const [classes, setClasses] = useState<Course[]>([]);
  const [emphases, setEmphases] = useState([""]);
  const [classGroups, setClassGroups] = useState<EmphasisGroup[]>([]);

  useMemo(() => {
    // Fetch classes from the external JSON file
    fetch("/classes.json")
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
        // Extract unique emphases
        const uniqueEmphases = [
          ...new Set<string>(data.flatMap((Course: Course) => Course.emphasis)),
        ];
        setEmphases(uniqueEmphases);
      })
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  useEffect(() => {
    // Group classes by emphasis
    const emphasisGroups = emphases.map((emphasis: string) => {
      const courses = classes.filter(
        (course: Course) => course.emphasis === emphasis
      );

      return { emphasis, courses };
    });
    setClassGroups(emphasisGroups);
  }, [emphases, classes]);

  return (
    <Box sx={{ background: "whitesmoke" }}>
      <Box sx={{ background: "#012D5F" }}>
        <Typography
          color="whitesmoke"
          variant="h2"
          mb={"2rem"}
          padding={"1rem 2rem"}
          fontWeight={"medium"}
        >
          Course Catalog
        </Typography>
      </Box>
      <Stack justifyContent={"center"} m={"0 auto"}>
        {classGroups.map((emphasisGroup: EmphasisGroup) => (
          <>
            <ClassCardList
              key={emphasisGroup.emphasis}
              courses={emphasisGroup.courses}
              categoryName={emphasisGroup.emphasis}
            />
            <Divider variant="middle" />
          </>
        ))}
      </Stack>
    </Box>
  );
};

export default MainPage;
