import {Message} from "./message";
import {assertNotEmpty} from "../api/assertions";

export interface SignUp extends Message {
    __type__: "sign-up"
    username: string
    email: string
    password1: string
    password2: string
}

export class SignUpValidator {
    public static isInstance(object: any): object is SignUp {
        return object["__type__"] === "sign-up";
    }

    public validate(message: SignUp): Promise<SignUp> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "username"))
            .then(e => assertNotEmpty(e, "email"))
            .then(e => assertNotEmpty(e, "password1"))
            .then(e => assertNotEmpty(e, "password2"))
    }
}

export interface RefreshToken extends Message {
    __type__: "auth/refresh-token"
    token: {
        idToken: string,
        accessToken: string,
        refreshToken: string
    }
}

export class RefreshTokenValidator {
    public static isInstance(object: any): object is RefreshToken {
        return object["__type__"] === "auth/refresh-token";
    }

    public validate(message: RefreshToken): Promise<RefreshToken> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "token"))
    }
}

export interface EnableMFA extends Message {
    __type__: "auth/enable-mfa"
}

export class EnableMFAValidator {
    public static isInstance(object: any): object is EnableMFA {
        return object["__type__"] === "auth/enable-mfa";
    }

    public validate(message: EnableMFA): Promise<EnableMFA> {
        return Promise.resolve(message)
    }
}

export interface VerifyMFA extends Message {
    __type__: "auth/verify-mfa"
    code: string
    deviceName: string
}

export class VerifyMFAValidator {
    public static isInstance(object: any): object is VerifyMFA {
        return object["__type__"] === "auth/verify-mfa";
    }

    public validate(message: VerifyMFA): Promise<VerifyMFA> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "code"))
            .then(e => assertNotEmpty(e, "deviceName"))
    }
}
