"use client";
import { ClassCardList } from "@/components/ClassCardList";
import { Course } from "@/public/types";
import { Container, Stack } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

type MainPageProps = {};

const MainPage = ({}: MainPageProps) => {
  const [classes, setClasses] = useState([]);
  const [emphases, setEmphases] = useState([""]);

  useMemo(() => {
    // Fetch quotes from the external JSON file
    fetch("/classes.json")
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
        // Extract unique categories
        const uniqueEmphases = [
          ...new Set<string>(data.flatMap((Course: Course) => Course.emphasis)),
        ];
        setEmphases(uniqueEmphases);
      })
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  return (
    <Stack justifyContent={"center"} m={"0 auto"}>
      <ClassCardList courses={classes} categoryName="Core Classes" />
    </Stack>
  );
};

export default MainPage;
