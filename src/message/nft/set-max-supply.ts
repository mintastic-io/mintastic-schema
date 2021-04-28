import {Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative} from "../../api/assertions";

export interface SetMaxSupply extends Message {
    __type__: "nft/set-max-supply"
    assetId: string
    supply: number
}

export class SetMaxSupplyValidator {
    public static isInstance(object: any): object is SetMaxSupply {
        return object["__type__"] === "nft/set-max-supply";
    }

    public validate(message: SetMaxSupply): Promise<SetMaxSupply> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "supply"))
            .then(e => assertNotEquals(e, "supply", 0))
    }
}
