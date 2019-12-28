import { IUser, IRawUser } from './interfaces';

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
  }
}
