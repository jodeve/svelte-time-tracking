import { writable } from "svelte/store";

export const store = writable(
  {
    tasks: [
      {
        id: 1,
        title: "Onboarding Screens",
        project: "Boardi",
        hours: 2,
        minutes: 30,
        seconds: 56,
      },
      {
        id: 2,
        title: "Authentication flow",
        project: "Boardi",
        hours: 2,
        minutes: 59,
        seconds: 56,
      },
      {
        id: 3,
        title: "CRM Update",
        project: "Eatsy",
        hours: 2,
        minutes: 30,
        seconds: 0,
      }
    ],
    projects: [
      "Eatsy",
      "Boardi",
      "Tracker"
    ],
    selectedTask: null,
    trackedTask: null
  }
);
