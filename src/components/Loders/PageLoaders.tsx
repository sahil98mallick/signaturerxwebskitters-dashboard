import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

const PageLoaders = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<LinearProgress />}>{children}</Suspense>;
};

export default PageLoaders;
