const experience = {
  experiences: [
    {
      name: "GIST Meta-Evolutionary Machine Intelligence(MEMI) Lab",
      isImportant: true,
      color: "#007bbf",
      job: "Intern",
      startedAt: "2025-03-04",
      endedAt: "2025-11-07",
      projects: [
        {
          name: "Lab Intern",
          isImportant: true,
          startedAt: "2024-01",
          endedAt: "2024-05",
          description:
            "I researched the QMR process required to run quantum algorithms on quantum computers, simplified the problem to a Token swapping problem, and proposed an approach using artificial neural network models to solve it.",
          whatIDid: [
            "QMR (Quantum Mapping and Routing) problem research",
            "Proposed an approach using artificial neural network models",
            "Simulator development and performance evaluation",
          ],
          techStacks: ["Python", "PyTorch", "pyTorch Geometric","Qiskit"],
        },
      ],
    },
    {
      name: "GIST Center for photon Information Processing (PIP)",
      isImportant: true,
      color: "#b509ac",
      job: "Intern",
      startedAt: "2024-09-02",
      endedAt: "2024-12-21",
      projects: [
        {
          name: "Lab Intern",
          isImportant: true,
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
      isImportant: false,
      color: "#6f69c6",
      job: "Backend Developer",
      startedAt: "2022-06",
      endedAt: "2023-08",
      projects: [
        {
          name: "REGO:now Backend",
          isImportant: false,
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
