import current from "./current";
import experience from "./experience";

export const main = {
  title: {
    developer: "학부생",
    name: "박시원 | Shiwon Park",
  },
  introduction:
    "컴퓨터와 관련된 것을 중점적으로 배우고 있는 학생입니다. 컴퓨터공학 전반에 관한 지식 뿐만이 아니라, 수학, 물리 쪽의 지식도 쌓아가고 있습니다. 현재는 양자 컴퓨팅/알고리즘에 관심을 가지고 공부하고 있습니다.",
  current,
  education: {
    attendedLectures: [
      "객체 지향 프로그래밍",
      "자료 구조",
      "Computer Security",
      "알고리즘 개론",
      "컴퓨터 네트워킹",
      "컴퓨터 시스템 이론 및 실습",
      "오토마타 이론",
      "데이터 엔지니어링",
      "컴퓨터 구조",
      "시스템 프로그래밍",
      "양자정보기술개론",
      "양자정보물리학 입문",
      "양자물리 및 연습 I, II",
    ],
    attendedLecture: "수강 강좌",
    major: "전기전자컴퓨터공학부",
  },
  experience,
  sideProject: {
    sideProjects: [
      {
        name: "Dutch: OOP Final Project",
        isImportant: true,
        url: "https://github.com/dohyun-ko/dutch-wasm",
        startedAt: "2023-04",
        endedAt: "2023-06",
        description:
          "프론트엔드와 백엔드 모두 C++로만 작성된 더치페이 플랫폼입니다. Emscripten을 이용해 C++를 Web Assembly로 트랜스파일할 수 있다는 점을 이용했습니다. [발표자료](https://docs.google.com/presentation/d/1z5m_s2rTHaUCb3rpHDB-zI-1NMvKHpysNDFqbwSA2LE/edit?usp=sharing)",
        whatIDid: [
          "React의 핵심 기능(navigator, state, router, function component, style 등)을 C++로 구현",
          "React, Flutter와 비슷한 형태의 프레임워크 개발",
          "브라우저 환경에서 성능 테스트 결과 해시 반복 연산 작업에서 React보다 110배 가량 빠른 성능을 보임",
        ],
      },
      {
        name: "2025년 KAIST-MIT 양자 정보 겨울학교",
        isImportant: true,
        url: "",
        startedAt: "2025-01-06",
        endedAt: "2025-01-17",
        description:
          "MIT와 KAIST에서 공동으로 진행하는 양자 정보 겨울학교에 참가했습니다.",
        whatIDid: [
          "양자 컴퓨팅의 기초 이론을 배움",
          "양자 컴퓨터의 플랫폼과 그 원리에 대해 배움",
          "양자 정보와 관련된 Lab Tour 진행",
        ],
      },
    ],
  },
  award: {
    list: [
      {
        name: "2025 BLACKOUT 해커톤: 암호화폐 부분 🥈 2등",
        isImportant: true,
        url: "https://github.com/spaghetti-code-2025",
        startedAt: "2025-01",
        endedAt: "2025-01",
      },
      {
        name: "2024 GIST AI4Good 해커톤: 🥇 1등",
        isImportant: true,
        url: "https://github.com/Gist-Cactus",
        startedAt: "2024-03",
        endedAt: "2024-03",
      },
      {
        name: "2024 KPMG Ideathon: 🥉 3등",
        isImportant: true,
        url: "https://github.com/gist-optima",
        startedAt: "2024-01",
        endedAt: "2024-02",
      },
      {
        name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2등",
        isImportant: true,
        startedAt: "2023-10",
        endedAt: "2023-11",
      },
      {
        name: "2023 Net Challenge: 🥈 은상",
        isImportant: true,
        url: "https://github.com/Net-Challenge-InfoTeam",
        startedAt: "2023-06",
        endedAt: "2023-12",
      },
    ],
  },
};
