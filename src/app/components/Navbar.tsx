"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = [
  { label: "GitHub", href: "https://github.com/AustinTrueFalse" },
  {
    label: "LinkedIn",
    href: "https://ru.linkedin.com/in/maksim-lavenetsky-8ba375260",
  },
  { label: "Telegram", href: "https://t.me/maksim_lave" },
];

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent !important",
        boxShadow: "none",
        backdropFilter: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                href={page.href}
                target="_blank"
                sx={{ color: "white", textTransform: "none", fontWeight: 500 }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
