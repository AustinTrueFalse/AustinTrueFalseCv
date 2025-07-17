"use client";

import * as React from "react";
import { Box } from "@mui/material";
import ExperienceCard from "./ui/ExperienceCard";



// Основной компонент опыта
export default function Experience() {
  return (
    <Box>
      <Box sx={{
        p: 3,
       
        backgroundColor: "transparent",
       
        color: "#d4d4d4",
        maxWidth: 800,
        mx: "auto",
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        mt: 5,
      }}>
        <strong>Мой опыт</strong>
      </Box>
      <ExperienceCard
        company="Лента"
        role="Fullstack-developer"
        projects={[
          {
            title: "Приложение для клиентского сервиса и поддержки V2",
            description: `Разрабатываю новую версию CRM-системы с учетом интеграции функционала нескольких корпоративных приложений.
Внедрил TypeScript и Vue 3, обеспечив высокую масштабируемость и поддержку строгой типизации компонентов.
Организовал взаимодействие frontend с микросервисной архитектурой через REST API.`,
            stack: "TypeScript, Vue 3, Nuxt, Vuetify, MS SQL, C#",
          },
          {
            title: "Приложение для клиентского сервиса и поддержки V1",
            description: `Разработал frontend-часть CRM-системы на Vue 2, обеспечив эффективный интерфейс для взаимодействия клиентского сервиса с пользователями.
Самостоятельно спроектировал интерфейс, основываясь на потребностях пользователей и бизнес-требованиях.
Спроектировал структуру базы данных (MS SQL), реализовал хранимые процедуры и оптимизировал запросы.
Работал в тесной связке с backend-разработчиком, внедрял компонентный подход во frontend, обеспечивая повторное использование UI-элементов.`,
            stack: "JavaScript, Vue 2, Nuxt, Vuetify, MS SQL, C#",
          },
          {
            title: "Сервис парсинга",
            description: `Разработал микросервис на C# для парсинга данных по промо-акциям с использованием Apache Kafka (producer/consumer flow).
Настроил взаимодействие с базой данных через ORM (Entity Framework), обеспечив устойчивость при высоких нагрузках и консистентность данных.`,
            stack: "C#, Kafka",
          },
        ]}
      />

      <ExperienceCard
        company="Лента"
        role="Database Architect"
        projects={[
          {
            title: "Проект аналитики и хранилищ данных",
            description: `Отвечал за архитектуру и развитие хранилищ данных, обеспечивал отказоустойчивость и масштабируемость системы.
Разрабатывал SQL хранимые процедуры для трансформации и агрегации данных.
Создавал витрины данных для аналитики и BI-систем.
Автоматизировал процессы промо-акций и начисления бонусных баллов клиентам.`,
            stack: "MS SQL",
          },
        ]}
      />
    </Box>
  );
}
