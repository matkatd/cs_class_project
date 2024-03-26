import { useScrollSpy } from "@/hooks/hooks";
import { Paper, Typography, Divider, Stack } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

type TableOfContentsProps = {
  emphases: string[];
};

export const TableOfContents = ({ emphases }: TableOfContentsProps) => {
  const activeId = useScrollSpy(emphases, { rootMargin: "0% 0% -25% 0%" });

  return (
    <Paper
      sx={{
        padding: "1rem 2rem",
        height: "90vh",
        position: "sticky",
        top: 20,
      }}
    >
      <Typography variant="h4">Categories</Typography>
      <Divider sx={{ my: "1rem" }} />
      <Stack direction={"column"} spacing={2}>
        {emphases.map((emphasis: string) => (
          <Link
            href={`#${emphasis}`}
            key={emphasis}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
              fontWeight: activeId === emphasis ? "bold" : "normal",
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${emphasis}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Typography variant="h6">{emphasis}</Typography>
          </Link>
        ))}
      </Stack>
    </Paper>
  );
};
