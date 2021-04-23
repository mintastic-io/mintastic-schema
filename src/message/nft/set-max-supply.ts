import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative} from "../../api/assertions";

export interface SetMaxSupply extends Message {
    type: "nft/set-max-supply"
    assetId: string
    supply: number
}

export class SetMaxSupplyImpl extends AbstractMessage implements SetMaxSupply {
    readonly type = "nft/set-max-supply"
    readonly assetId: string
    readonly supply: number

    constructor(message: SetMaxSupply) {
        super(message);
        this.assetId = message.assetId
        this.supply = message.supply
    }

    public static isInstance(object: any): object is SetMaxSupply {
        return object["type"] === "nft/set-max-supply";
    }

    public validate(): Promise<SetMaxSupply> {
        return Promise.resolve(this as SetMaxSupply)
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "supply"))
            .then(e => assertNotEquals(e, "supply", 0))
    }
}
