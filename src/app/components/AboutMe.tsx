"use client";

import * as React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { colors } from "../lib/colors";


const data = {
  pronouns: ["Он", "Его"],
  code: ["JavaScript", "TypeScript", "C# (base level)", "SQL"],
  technologies: {
    frontend: ["Vue2/3", "Pinia", "VueX", "Vuetify", "React (start level)"],
    databases: ["mssql"],
    misc: ["firebase", "git"],
  },
  workSpaces: ["notion", "jira"],
  favoriteQuote:
    "Чтобы сделать хорошо, сначала сделай плохо, а потом откати обратно",
  askMeAbout: ["Японские авто", "DayZ"],
};

export default function AboutMe() {
  return (
    <Paper
      elevation={3}
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
        marginTop: 5,
      }}
    >
      <Typography component="div" sx={{ fontSize: "clamp(14px, 2vw, 18px)" }}>
        <strong>Обо мне</strong>

        <div>Frontend Developer</div>
        <Box sx={{ marginTop: 3 }}>
          <span style={{ color: colors.keyword }}>const</span>{" "}
          <span style={{ color: colors.key }}>maksim</span>{" "}
          <span style={{ color: colors.brace }}>= {"{"}</span>
          {"\n  "}
          <span style={{ color: colors.key }}>code</span>: [
          {data.code.map((lang, i) => (
            <span key={lang}>
              <span style={{ color: colors.string }}>`{lang}`</span>
              {i < data.code.length - 1 ? ", " : ""}
            </span>
          ))}
          ],
          {"\n  "}
          <span style={{ color: colors.key }}>technologies</span>: {"{"}
          {"\n    "}
          <span style={{ color: colors.key }}>frontend</span>: [
          {data.technologies.frontend.map((item, i) => (
            <span key={item}>
              <span style={{ color: colors.string }}>`{item}`</span>
              {i < data.technologies.frontend.length - 1 ? ", " : ""}
            </span>
          ))}
          ],
          {"\n    "}
          <span style={{ color: colors.key }}>databases</span>: [
          {data.technologies.databases.map((item, i) => (
            <span key={item}>
              <span style={{ color: colors.string }}>`{item}`</span>
              {i < data.technologies.databases.length - 1 ? ", " : ""}
            </span>
          ))}
          ],
          {"\n    "}
          <span style={{ color: colors.key }}>misc</span>: [
          {data.technologies.misc.map((item, i) => (
            <span key={item}>
              <span style={{ color: colors.string }}>`{item}`</span>
              {i < data.technologies.misc.length - 1 ? ", " : ""}
            </span>
          ))}
          ],
          {"\n  },"}
          {"\n  "}
          <span style={{ color: colors.key }}>workSpaces</span>: [
          {data.workSpaces.map((item, i) => (
            <span key={item}>
              <span style={{ color: colors.string }}>`{item}`</span>
              {i < data.workSpaces.length - 1 ? ", " : ""}
            </span>
          ))}
          ],
          {"\n  "}
          {/* <span style={{ color: colors.key }}>favoriteQuote</span>:{" "}
          <span style={{ color: colors.string }}>`{data.favoriteQuote}`</span>,
          {"\n  "} */}
          <span style={{ color: colors.key }}>askMeAbout</span>: [
          {data.askMeAbout.map((item, i) => (
            <span key={item}>
              <span style={{ color: colors.string }}>`{item}`</span>
              {i < data.askMeAbout.length - 1 ? ", " : ""}
            </span>
          ))}
          ]{"\n"}
          <span style={{ color: colors.brace }}>{"};"}</span>
          {"\n\n"}
        </Box>
        <div>
          Как frontend разработчик, я стремлюсь не просто писать код, а
          создавать удобные, логичные и устойчивые интерфейсы. Разрабатывая
          собственные проекты, учусь видеть продукт целиком — от идеи до
          реализации и поддержки.
        </div>
      </Typography>
    </Paper>
  );
}
