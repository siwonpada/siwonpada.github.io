const experience = {
  experiences: [
    {
      name: "GIST Center for photon Information Processing (PIP)",
      isImportant: false,
      color: "#b509ac",
      job: "인턴",
      startedAt: "2024-09-02",
      endedAt: "2024-12-21",
      projects: [
        {
          name: "Lab Intern",
          isImportant: false,
          startedAt: "2024-01",
          endedAt: "2024-05",
          description:
            "I set up the experimental equipment to confirm the diffraction pattern at the single-photon level and developed a data analysis automation program. I conducted experiments at low light levels, but unfortunately, I did not conduct actual single-photon experiments.",
          whatIDid: [
            "Setting up experimental equipment and collecting data",
            "Developing a data analysis automation program",
          ],
          techStacks: ["C#", ".NET", "Thorlabs Kinesis", "Python", "Matlab"],
        },
      ],
    },
    {
      name: "startup REGO",
      isImportant: true,
      color: "#6f69c6",
      job: "Backend Developer",
      startedAt: "2022-06",
      endedAt: "2023-08",
      projects: [
        {
          name: "REGO:now Backend",
          isImportant: true,
          startedAt: "2022-06",
          endedAt: "2023-08",
          description: "Drive-centric same-day tourism content service",
          whatIDid: [
            "Backend API server development and maintenance",
            "DB design and construction",
            "CI/CD construction",
            "Server infrastructure construction",
          ],
          techStacks: [
            "NestJS",
            "Typescript",
            "prisma",
            "PostgreSQL",
            "postgis",
            "docker",
            "docker-compose",
          ],
        },
      ],
    },
  ],
};

export default experience;
