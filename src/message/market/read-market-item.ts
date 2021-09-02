import {assertNotEmpty} from "../../api/assertions";
import {Message} from "../message";

export interface ReadMarketItem extends Message {
    __type__: "market/read-market-item"
    ownerId: string
    assetId: string
}

export class ReadMarketItemValidator {
    public static isInstance(object: any): object is ReadMarketItem {
        return object["__type__"] === "market/read-market-item";
    }

    public validate(message: ReadMarketItem): Promise<ReadMarketItem> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "ownerId"))
            .then(e => assertNotEmpty(e, "assetId"));
    }
}
