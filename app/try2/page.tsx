"use client";
import { ClassCardList } from "@/components/ClassCardList";
import { TableOfContents } from "@/components/TableOfContents";
import { Course } from "@/public/types";
import "./global.css";

import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
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
        (course: Course) => course.emphasis === emphasis,
      );
      courses.sort((a, b) => b.ranking - a.ranking);
      return { emphasis, courses };
    });

    setClassGroups(emphasisGroups);
  }, [emphases, classes]);

  const [activeId, setActiveId] = useState<string>("");

  return (
    <Box sx={{ background: "whitesmoke" }}>
      <Box
        sx={{ background: "#012D5F", display: "flex", alignItems: "center" }}
      >
        <Typography
          color="whitesmoke"
          variant="h2"
          padding={"1rem 2rem"}
          fontWeight={"medium"}
        >
          Course Catalog
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              backgroundColor: "white",
              borderRadius: "20px",
              width: "calc(25ch + 60px)",
            },
            marginLeft: "auto",
            marginRight: "24px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="Search Class" variant="filled" />
        </Box>
      </Box>
      <Grid container>
        <Grid xs={3}>
          <TableOfContents activeId={activeId} emphases={emphases} />
        </Grid>
        <Grid xs={9}>
          <Stack justifyContent={"center"} m={"0 auto"}>
            {classGroups.map((emphasisGroup: EmphasisGroup) => (
              <>
                <ClassCardList
                  key={emphasisGroup.emphasis}
                  courses={emphasisGroup.courses}
                  categoryName={emphasisGroup.emphasis}
                  setActiveId={setActiveId}
                />
                <Divider variant="middle" />
              </>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
