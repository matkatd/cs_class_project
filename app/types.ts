type Class = {
  courseNumber: string;
  className: string;
  sections: {
    professor: string;
    roomNumber: number;
    classTime: string;
  }[];
  prerequisites: string[];
  description: string;
};
