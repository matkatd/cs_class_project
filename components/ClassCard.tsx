import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type ClassCardProps = {};

export const ClassCard = ({}: ClassCardProps) => (
  <Card>
    <CardContent>
      <Typography variant="h5">Class Name</Typography>
      <Typography variant="body1">Class Description</Typography>
    </CardContent>
  </Card>
);
