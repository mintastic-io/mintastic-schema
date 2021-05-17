import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Message} from "../message";

export interface Transfer extends Message {
    __type__: "nft/transfer"
    buyer: string
    assetId: string
    amount: number
}

export class TransferValidator {
    public static isInstance(object: any): object is Transfer {
        return object["__type__"] === "market/abort-bid";
    }

    public validate(message: Transfer): Promise<Transfer> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "buyer"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "amount"))
    }
}
