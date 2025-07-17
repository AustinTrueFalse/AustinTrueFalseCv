"use client";

import * as React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { colors } from "@/app/lib/colors";

// Компонент карточки опыта
export default function ExperienceCard({
  company,
  role,
  projects,
}: {
  company: string;
  role: string;
  projects: { title: string; description: string; stack: string }[];
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        backgroundColor: "transparent",
        border: "1px solid #444",
        color: "#d4d4d4",
        maxWidth: 800,
        mx: "auto",
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        mt: 3,
      }}
    >
      <Typography component="div" sx={{ fontSize: "clamp(14px, 2vw, 18px)" }}>
        <strong style={{ color: colors.key }}>{company}</strong>
        <br />
        <strong style={{ color: colors.keyword }}>{role}</strong>
        {projects.map((proj, idx) => (
          <Box key={idx} mt={3}>
            <strong>{proj.title}</strong>
            <br />
            <br />
            {proj.description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
                <br />
              </React.Fragment>
            ))}
            <strong>Stack:</strong> {proj.stack}
            {idx < projects.length - 1 && (
              <>
                <br />
                <hr style={{ borderColor: "#333", marginTop: 10 }} />
              </>
            )}
          </Box>
        ))}
      </Typography>
    </Paper>
  );
}
