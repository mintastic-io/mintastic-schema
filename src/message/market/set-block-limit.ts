import {AbstractMessage, Message} from "../message";
import {assertNotNegative} from "../../api/assertions";

export interface SetBlockLimit extends Message {
    type: "market/set-block-limit"
    blockLimit: number
}

export class SetBlockLimitImpl extends AbstractMessage implements SetBlockLimit {
    readonly type = "market/set-block-limit"
    readonly blockLimit: number

    constructor(message: SetBlockLimit) {
        super(message);
        this.blockLimit = message.blockLimit
    }

    public static isInstance(object: any): object is SetBlockLimit {
        return object["type"] === "market/set-block-limit";
    }

    public validate(): Promise<SetBlockLimit> {
        return Promise.resolve(this as SetBlockLimit)
            .then(e => assertNotNegative(e, "blockLimit"))
    }

    public toServer(sub: string): Promise<SetBlockLimit> {
        return Promise.resolve(this);
    }
}