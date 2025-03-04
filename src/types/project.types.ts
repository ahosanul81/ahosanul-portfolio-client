export type TProject = {
  _id: string;
  projectName: string;
  idea: string;
  homePageImg: string;
  liveLink: string;
};
export type TProjectDetails = {
  _id?: string;
  projectName: string;
  idea: string;
  homePageImg: string;
  technologies: string[];
  features: string[];
  githubRepo: {
    clientSite: string;
    backendSite: string;
  };
  liveLink: string;
  developerNotes: string;
  description: string;
};
