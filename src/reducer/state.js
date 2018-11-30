const initialState = {
  title: "Interview Feedback Form",
  navigation: ["Dashboard", "Feedback"],
  rating: [
    {
      title: "Outstanding",
      description: ""
    },
    {
      title: "Excellent",
      description: "exceeds Requirement"
    },
    {
      title: "Competent",
      description: "Acceptable Proficiency"
    },
    {
      title: "Below Average",
      description: "Dose Not Meet Requirement"
    },
    {
      title: "N/A",
      description: "Unable to determin / not applicable for this candidate."
    }
  ],
  technologies: [
    { technology: "Angular", version: [1, 2, 4, 5, 6, 8] },
    { technology: "JavacSript", version: [1.6] },
    { technology: "HTML", version: [4, 5, "XHTML"] },
    { technology: "CSS/BootStrap/ResponsiveDesign" },
    { technology: "Testing Tools", version: ["Karma", "Jasmin"] },
    { technology: "Sub Version", version: ["GIT", "SVN"] }
  ]
};

export default initialState;
