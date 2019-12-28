export interface IRawUser {
  login: string;
  id: number;
  email: string;
  name: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  bio: string;
}

export interface IUser {
  login: string;
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
  url: string;
  apiUrls: {
    repos: string;
  };
  description: string;
}
