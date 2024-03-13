import { Dialog, Paper } from "@mui/material";
import React from "react";

type ClassDialogProps = {
  showDialog: boolean;
};

export const ClassDialog = ({ showDialog }: ClassDialogProps) => {
  return (
    <Dialog open={showDialog}>
      <Paper>
        <h1>Dialog</h1>
        <p>Dialog Content</p>
      </Paper>
    </Dialog>
  );
};
