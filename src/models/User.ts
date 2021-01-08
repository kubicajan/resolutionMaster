export enum cUser {
    id = 'id',
    nickname = 'nickname',
}

export interface UserInterface {
    id: string;
    nickname: string;
}

export const User = (): UserInterface => ({
    id: '',
    nickname: '',
});
