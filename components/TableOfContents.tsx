import { toCamelCase } from "@/utils/utils";
import { Paper, Typography, Divider, Stack } from "@mui/material";
import Link from "next/link";

type TableOfContentsProps = {
  emphases: string[];
  activeId: string;
};

export const TableOfContents = ({
  emphases,
  activeId,
}: TableOfContentsProps) => {
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
            href={`#${toCamelCase(emphasis)}`}
            key={emphasis}
            style={{
              color: activeId === emphasis ? "#1876D1" : "black",
              textDecoration: activeId === emphasis ? "underline" : "none",
              cursor: "pointer",
              fontWeight: activeId === emphasis ? "800" : "100",
              // transition: "all 0.3s ease-in-out",
            }}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(`#${toCamelCase(emphasis)}`)
                ?.scrollIntoView({
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
