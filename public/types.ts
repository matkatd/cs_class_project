export type Course = {
  courseTitle: string;
  courseName: string;
  classStanding: string;
  emphasis: string;
  creditHours: number;
  description: string;
  prerequisites: string[]; // List of courseTitles
  perceivedDifficulty: number;
  ranking: number;
  core: boolean;
};
