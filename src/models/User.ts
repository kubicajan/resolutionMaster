export enum cUser {
  nickname = "nickname",
}

export interface UserInterface {
  nickname: string;
}

export const User = (): UserInterface => ({
  nickname: "",
});
