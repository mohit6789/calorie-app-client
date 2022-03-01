import { Card, CardContent } from "@mui/material";
import React from "react";

const Unauthorised = () => {
  return (
    <Card variant="outlined">
      <CardContent> You are unauthorised to view this page.</CardContent>
    </Card>
  );
};

export default Unauthorised;
