import { Course } from "@/public/types";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import { ClassDialog } from "./ClassDialog";

type ClassCardProps = {
  classObj: Course;
};

export const ClassCard = ({ classObj }: ClassCardProps) => {
  const [showDialog, setShowDialog] = React.useState(false);
  return (
    <Card>
      <CardContent sx={{ height: "6rem", pb: "2rem" }}>
        <Typography fontSize={"1.3rem"}>
          {classObj.courseName} - {classObj.courseTitle}
        </Typography>
        <Typography sx={{ color: "#444444" }}>
          Credits: {classObj.creditHours}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#444444" }}>
            Student Rating: {classObj.ranking}/5
          </Typography>
          <Tooltip
            title="Student rating based off of the average rating, from 1 (terrible) through 5 (incredible), of all students who have taken this class"
            arrow
            sx={{ marginLeft: "5px" }}
          >
            <InfoOutlinedIcon
              sx={{ color: "grey", fontSize: "small", marginLeft: ".3rem" }}
            />
          </Tooltip>
        </div>
      </CardContent>
      {/* <CardActionArea
        sx={{ background: "white", borderRadius: "0 0 2px 2px" }}
        onClick={() => {
          setShowDialog(!showDialog);
        }}
      > */}
      {/* <CardContent>
          <div>
            <Typography color="#0057B8" style={{ textAlign: "right" }}>
              See More
            </Typography>
          </div>
        </CardContent> */}
      {/* </CardActionArea> */}
      <Button
        variant="text"
        style={{ float: "right", margin: "16px" }}
        onClick={() => {
          setShowDialog(!showDialog);
        }}
      >
        See More
      </Button>
      <ClassDialog
        showDialog={showDialog}
        course={classObj}
        onClose={setShowDialog}
      ></ClassDialog>
    </Card>
  );
};
