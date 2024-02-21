export type ClassObj = {
  courseTitle: string;
  courseName: string;
  classStanding: string;
  creditsHours: number;
  prerequisites: string[]; // List of courseTitles
  description: string;
  emphasis: string;
  perceivedDifficulty: number;
};
