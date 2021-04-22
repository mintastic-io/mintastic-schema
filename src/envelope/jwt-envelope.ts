import {Message} from "../message/message";

export interface JWTEnvelope {
    jwt: string
    payload: Message
}