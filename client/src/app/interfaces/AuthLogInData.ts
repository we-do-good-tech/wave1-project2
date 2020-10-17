import { UserName } from './TeacherId';

export interface AuthTokenData {
    token: string
    expiresInDate: Date
    userName: UserName
}

