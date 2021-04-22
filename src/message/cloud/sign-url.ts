import {AbstractMessage, Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";

export interface SignUrl extends Message {
    type: "cloud/sign-url"
    fileName: string
}

export class SignUrlImpl extends AbstractMessage implements SignUrl {
    readonly type = "cloud/sign-url"
    readonly fileName: string

    constructor(message: SignUrl) {
        super(message);
        this.fileName = message.fileName
    }

    public static isInstance(object: any): object is SignUrl {
        return object["type"] === "cloud/sign-url";
    }

    public validate(): Promise<SignUrl> {
        return Promise.resolve(this as SignUrl)
            .then(e => assertNotEmpty(e, "fileName"))
    }

    public toServer(sub: string): Promise<Message> {
        return Promise.resolve(this);
    }
}