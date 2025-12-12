import current from "./current";
import experience from "./experience";

export const main = {
  title: { developer: "undergraduate student", name: "Shiwon Park" },
  introduction:
    "I am a student who is focusing on learning things related to computers. I am not only learning about computer science in general, but also maths and physics. Currently, I am studying NCO.",
  current,
  education: {
    attendedLectures: [
      "Object-Oriented Programming",
      "Data Structures",
      "Computer Security",
      "Introduction to Algorithms",
      "Computer Networking",
      "Computer Systems Theory and Practice",
      "Automata Theory",
      "Data Engineering",
      "Computer Architecture",
      "System Programming",
      "Signals and Systems",
      "Introduction to Quantum Information Technology",
      "Introduction to Quantum Information Physics",
      "Quantum Physics and Rec I, II",
      "Scientific Computing (Numerical Analysis)",
      "Introduction to Combinatorial Optimization",
      "Abstract Algebra",
      "Number Theory and Applications",
      "Complex Function Theory and Applications",
    ],
    attendedLecture: "Attended Courses",
    major: "Department of Electrical, Electronics, and Computer Engineering",
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
          "A Dutch Pay platform written entirely in C++ for both frontend and backend. It utilizes Emscripten to transpile C++ into Web Assembly. [Presentation Slides](https://docs.google.com/presentation/d/1z5m_s2rTHaUCb3rpHDB-zI-1NMvKHpysNDFqbwSA2LE/edit?usp=sharing)",
        whatIDid: [
          "Implemented key React functionalities such as navigator, state, router, function components, and styles in C++",
          "Developed a framework similar to React and Flutter",
          "In browser environment performance tests, it showed approximately 110 times faster performance than React in hash repetitive calculation tasks",
        ],
      },
    ],
  },
  award: {
    list: [
      {
        name: "2025 BLACKOUT Hackathon: 🥈 2nd Place in Cryptocurrency Section",
        isImportant: true,
        url: "https://github.com/spaghetti-code-2025",
        startedAt: "2025-01",
        endedAt: "2025-01",
      },
      {
        name: "2024 GIST AI4Good Hackathon: 🥇 1st Place",
        isImportant: true,
        url: "https://github.com/Gist-Cactus",
        startedAt: "2024-03",
        endedAt: "2024-03",
      },
      {
        name: "2024 KPMG Ideathon: 🥉 3rd Place",
        isImportant: true,
        url: "https://github.com/gist-optima",
        startedAt: "2024-01",
        endedAt: "2024-02",
      },
      {
        name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2nd Place",
        isImportant: false,
        startedAt: "2023-10",
        endedAt: "2023-11",
      },
      {
        name: "2023 Net Challenge: 🥈 Silver Award",
        isImportant: true,
        url: "https://github.com/Net-Challenge-InfoTeam",
        startedAt: "2023-06",
        endedAt: "2023-12",
      },
    ],
  },
};
