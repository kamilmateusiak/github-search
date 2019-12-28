import apiClient, { IRequestResult } from "../api-client";
import { IUser, IRawUser } from "./interfaces";
import { deserializeUser } from "./user-serializer";

class UserApi {
  async findUser(name: string): Promise<IRequestResult<IUser>> {
    if (!name) {
      return {
        result: null,
        error: new Error('Please provide username')
      }
    }

    const path = `/users/${name}`;

    const requestResult = await apiClient.get<IRawUser>(path);

    return {
      ...requestResult,
      result: deserializeUser(requestResult.result)
    }
  }
}

const userApi = new UserApi();

export default userApi;
