"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AvatarCv from "./components/AvatarCv";
import RunningText from "./components/RunningText";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";


export default function MainInfo() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: 8, marginBottom: 20 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        flexWrap="wrap"
      >
        <Box
          sx={{
            width: 250,
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AvatarCv />
        </Box>
        <RunningText />
      </Box>
      <AboutMe />
      <Experience />
    </Container>
  );
}
