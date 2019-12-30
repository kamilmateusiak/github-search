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

export interface IRawUserRepository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
}

export interface IUserRepository {
  id: number;
  name: string;
  fullName: string;
  isPrivate: boolean;
  url: string;
  starsCount: number;
  watchersCount: number;
  language: string;
}
