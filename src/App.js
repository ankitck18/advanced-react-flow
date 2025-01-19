import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Workflow } from "./Workflow/Workflow";
import { ReactFlowProvider } from "@xyflow/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme } from "@mui/material/styles"; // Create a Material UI theme

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
});

// Create a default Material-UI theme (you can customize it as needed)
const theme = createTheme();

function App() {
  return (
   
      <QueryClientProvider client={queryClient}>
        <ReactFlowProvider>
          <Workflow />
        </ReactFlowProvider>
      </QueryClientProvider>
  );
}

export default App;
