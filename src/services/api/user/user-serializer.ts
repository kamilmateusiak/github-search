import { IUser, IRawUser, IRawUserRepository, IUserRepository } from './interfaces';

export function deserializeUser(data: IRawUser | null): IUser | null {
  if (!data) {
    return null;
  }

  const { id, name, login, email } = data;

  return {
    id,
    login,
    name,
    email,
    url: data.html_url,
    apiUrls: {
      repos: data.repos_url
    },
    avatarUrl: data.avatar_url,
    description: data.bio
  };
}

export function deserializeUserRepo(data: IRawUserRepository | null): IUserRepository | null {
  if (!data) {
    return null;
  }

  const { id, name, language } = data;

  return {
    id,
    name,
    language,
    isPrivate: data.private,
    starsCount: data.stargazers_count,
    watchersCount: data.watchers_count,
    url: data.html_url,
    fullName: data.full_name
  };
}

export function deserializeUserRepos(data: IRawUserRepository[] | null): IUserRepository[] {
  if (!data || data === null) {
    return [];
  }

  const filterRepos = (repo: IUserRepository | null): repo is IUserRepository => repo !== null;

  return data.map(repo => deserializeUserRepo(repo)).filter(filterRepos);
}
