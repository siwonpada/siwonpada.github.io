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
          name: "랩 인턴",
          isImportant: false,
          startedAt: "2024-01",
          endedAt: "2024-05",
          description:
            "single-photon level에서 회절 무늬를 확인하기 위한 실험 기기 세팅 및, 데이터 분석 자동화 프로그램을 개발 했습니다. 낮은 광량에은 실험을 진행하였으나, 아쉽게도, 실제 single-photon 실험을 진행하지는 못했습니다.",
          whatIDid: [
            "실험 기기 세팅 및 데이터 수집",
            "데이터 분석 자동화 프로그램 개발",
          ],
          techStacks: ["C#", ".NET", "Thorlabs Kinesis", "Python", "Matlab"],
        },
      ],
    },
    {
      name: "스타트업 REGO",
      isImportant: true,
      color: "#6f69c6",
      job: "벡엔드 개발자",
      startedAt: "2022-06",
      endedAt: "2023-08",
      projects: [
        {
          name: "REGO:now 벡엔드",
          isImportant: true,
          startedAt: "2022-06",
          endedAt: "2023-08",
          description: "드라이브 중심의 당일치기 관광 콘텐츠 제공 서비스",
          whatIDid: [
            "백엔드 API 서버 개발, 유지보수",
            "DB 설계 및 구축",
            "CI/CD 구축",
            "서버 인프라 구축",
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
