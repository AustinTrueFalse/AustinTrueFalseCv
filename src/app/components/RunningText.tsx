"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";

// Компонент печатающегося текста без курсора
export default function RunningText() {
  const text = "Привет, меня зовут Максим";

  const typing = keyframes`
    0% { width: 0 }
    40% { width: 26ch }
    60% { width: 26ch }
    100% { width: 0 }
  `;

  return (
    <Box
      sx={{
        width: "26ch",
        overflow: "hidden",
     
        fontSize: "clamp(16px, 4vw, 32px)",
        color: "#569cd6",
        whiteSpace: "nowrap",
      }}
    >
      <Box
        component="span"
        sx={{
          display: "inline-block",
          animation: `${typing} 6s steps(26, end) infinite`,
          width: "100%",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {text}
      </Box>
    </Box>
  );
}
