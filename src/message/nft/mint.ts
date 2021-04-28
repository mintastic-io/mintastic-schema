import {Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative} from "../../api/assertions";

export interface Mint extends Message {
    __type__: "nft/mint"
    recipient: string
    assetId: string
    amount: number
}

export class MintValidator {
    public static isInstance(object: any): object is Mint {
        return object["__type__"] === "nft/mint";
    }

    public validate(message: Mint): Promise<Mint> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "recipient"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }
}
