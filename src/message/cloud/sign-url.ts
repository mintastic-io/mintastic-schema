import {Message} from "../message";
import {assertEquals, assertNotEmpty} from "../../api/assertions";
import {JwtPayload} from "jwt-decode";

export interface SignUrl extends Message {
    __type__: "cloud/sign-url"
    assetId: string
    creatorId: string
    fileName: string
}

export class SignUrlValidator {
    public static isInstance(object: any): object is SignUrl {
        return object["__type__"] === "cloud/sign-url";
    }

    public validate(message: SignUrl, jwt: JwtPayload): Promise<SignUrl> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "fileName"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotEmpty(e, "creatorId"))
            .then(e => assertEquals(e, "creatorId", jwt.sub))
    }
}