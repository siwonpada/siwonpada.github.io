const current = {
  organizations: [
    {
      name: "GIST 학생회 정보국",
      isImportant: true,
      color: "#EB6263",
      url: "https://introduce.gistory.me/",
      job: "벡엔드 팀장",
      startedAt: "2022-03",
      projects: [
        {
          name: "AMS 벡엔드",
          isImportant: false,
          startedAt: "2022-11",
          endedAt: "2023-02",
          description: "GIST 동아리 신청 시스템인 AMS의 벡엔드를 개발했습니다.",
          whatIDid: ["벡엔드 개발", "DB 설계"],
          techStacks: ["NestJs", "TypeScript", "typeorm", "mariaDB"],
        },
        {
          name: "Ziggle 벡엔드",
          isImportant: true,
          url: "https://github.com/gsainfoteam/ziggle-be",
          startedAt: "2023-04",
          description:
            "GIST 통합 공지 플랫폼인 Ziggle의 벡엔드를 개발하고 있습니다.",
          whatIDid: [
            "NestJS, Prisma를 이용한 백엔드 개발",
            "학부생의 25%인 DAU 200명 유지 중",
          ],
          techStacks: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
        },
        {
          name: "벡엔드 코어",
          isImportant: true,
          startedAt: "2023-03",
          description:
            "팀 내 벡엔드 및 인프라 기술 수준을 향상시키기 위해 노력하고 있습니다.",
          whatIDid: [
            "컨테이너 기반의 서비스 배포 및 관리를 위한 k3s 유지관리",
            "CI/CD 파이프라인 구축 및 유지보수",
            "팀 내 코드 리뷰 문화 활성화",
            "terraform을 이용한 인프라 구성",
          ],
        },
        {
          name: "IdP 벡엔드",
          isImportant: false,
          url: "https://github.com/gsainfoteam/idp-be",
          startedAt: "2022-09",
          description:
            "GIST에서 사용하는 OAuth2.0 인증 시스템 IdP의 벡엔드를 개발하였습니다.",
          whatIDid: ["벡엔드 개발"],
          techStacks: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
        },
      ],
    },
    {
      name: "Wing: GIST 전산 동아리",
      isImportant: false,
      color: "rgb(151, 123, 242)",
      url: "https://wing-homepage.vercel.app/",
      job: "부원",
      startedAt: "2023-03",
      projects: [
        {
          name: "Wing Session",
          isImportant: true,
          startedAt: "2023-03",
          description: "Wing에서 개발 상황 교류 및 세션을 진행합니다.",
          whatIDid: ["React.cpp 세션 진행"],
        },
      ],
    },
  ],
};

export default current;
