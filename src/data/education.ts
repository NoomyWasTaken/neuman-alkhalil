export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  note?: string;
}

export const education: Education[] = [
  {
    id: "georgetown",
    school: "Georgetown University",
    degree: "M.S. Computer Science",
    startDate: "Aug 2022",
    endDate: "May 2024",
    note: "Focus: AI & Machine Learning, Computer Vision, NLP",
  },
  {
    id: "buckingham",
    school: "University of Buckingham",
    degree: "B.S. Computer Science and Information Systems",
    startDate: "Oct 2018",
    endDate: "Jul 2022",
    note: "Dual degree program",
  },
  {
    id: "ssst",
    school: "Sarajevo School of Science and Technology",
    degree: "B.S. Computer Science",
    startDate: "Oct 2018",
    endDate: "Jul 2022",
    note: "Dual degree program",
  },
];
