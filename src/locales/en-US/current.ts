const current = {
  organizations: [
    {
      name: "GIST Student Council Information Bureau",
      isImportant: true,
      color: "#EB6263",
      url: "https://introduce.gistory.me/",
      job: "Backend Team Leader",
      startedAt: "2022-03",
      projects: [
        {
          name: "AMS Backend",
          isImportant: false,
          startedAt: "2022-11",
          endedAt: "2023-02",
          description:
            "Developed the Backend for AMS, the GIST club application system.",
          whatIDid: ["Backend development", "DB design"],
          techStacks: ["NestJs", "TypeScript", "typeorm", "mariaDB"],
        },
        {
          name: "Ziggle Backend",
          isImportant: true,
          url: "https://github.com/gsainfoteam/ziggle-be",
          startedAt: "2023-04",
          description:
            "Developing the backend for Ziggle, the GIST integrated announcement platform.",
          whatIDid: [
            "Backend development using NestJS, Prisma",
            "Maintaining 200 DAU, 25% of undergraduate students",
          ],
          techStacks: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
        },
        {
          name: "Backend Core",
          isImportant: true,
          startedAt: "2022-09",
          description:
            "Efforts to improve the backend and infrastructure technology level within the team.",
          whatIDid: [
            "k3s maintenance for container-based service deployment and management",
            "Building and maintaining CI/CD pipelines",
            "Activating code review culture within the team",
            "Infrastructure configuration using terraform",
          ],
        },
        {
          name: "IdP Backend",
          isImportant: false,
          url: "https://github.com/gsainfoteam/idp-be",
          startedAt: "2022-09",
          description:
            "Developed the backend for IdP, the OAuth2.0 authentication system used at GIST.",
          whatIDid: ["Backend development"],
          techStacks: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
        },
      ],
    },
    {
      name: "Wing: GIST Computing Club",
      isImportant: false,
      color: "rgb(151, 123, 242)",
      url: "https://wing-homepage.vercel.app/",
      job: "junior Member",
      startedAt: "2023-03",
      projects: [
        {
          name: "Wing Session",
          isImportant: true,
          startedAt: "2023-03",
          description:
            "Conducting development knowledge exchange and sessions at Wing.",
          whatIDid: ["Led a session on React.cpp"],
        },
      ],
    },
  ],
};

export default current;
