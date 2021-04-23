import {AbstractMessage, Message} from "../message";
import {assertEquals, assertNotEmpty} from "../../api/assertions";

export interface SignUrl extends Message {
    type: "cloud/sign-url"
    assetId: string
    creatorId: string
    fileName: string
}

export class SignUrlImpl extends AbstractMessage implements SignUrl {
    readonly type = "cloud/sign-url"
    readonly assetId: string
    readonly creatorId: string
    readonly fileName: string

    constructor(message: SignUrl) {
        super(message);
        this.assetId = message.assetId
        this.creatorId = message.creatorId
        this.fileName = message.fileName
    }

    public static isInstance(object: any): object is SignUrl {
        return object["type"] === "cloud/sign-url";
    }

    public validate(sub: string): Promise<SignUrl> {
        return Promise.resolve(this as SignUrl)
            .then(e => assertNotEmpty(e, "fileName"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotEmpty(e, "creatorId"))
            .then(e => assertEquals(e, "creatorId", sub))
    }
}