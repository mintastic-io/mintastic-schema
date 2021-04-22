import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative} from "../../api/assertions";

export interface Mint extends Message {
    type: "nft/mint"
    recipient: string
    assetId: string
    amount: number
}

export class MintImpl extends AbstractMessage implements Mint {
    readonly type = "nft/mint"
    readonly recipient: string
    readonly assetId: string
    readonly amount: number

    constructor(message: Mint) {
        super(message);
        this.recipient = message.recipient
        this.assetId = message.assetId
        this.amount = message.amount
    }

    public static isInstance(object: any): object is Mint {
        return object["type"] === "nft/mint";
    }

    public validate(): Promise<Mint> {
        return Promise.resolve(this as Mint)
            .then(e => assertNotEmpty(e, "recipient"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }

    public toServer(sub: string): Promise<Mint> {
        return Promise.resolve(this);
    }
}
