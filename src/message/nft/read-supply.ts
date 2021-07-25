import {Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";

export interface ReadSupply extends Message {
    __type__: "nft/read-supply",
    assetId: string,
    address?: string
}

export class ReadSupplyValidator {
    public static isInstance(object: any): object is ReadSupply {
        return object["__type__"] === "nft/read-supply";
    }

    public validate(message: ReadSupply): Promise<ReadSupply> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
    }
}
