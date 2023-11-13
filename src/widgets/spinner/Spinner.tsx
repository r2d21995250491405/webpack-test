import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";
import { FC } from "react";

export const Spinner: FC = () => {
  return (
    <Box>
      <CircularProgress />
    </Box>
  );
};
