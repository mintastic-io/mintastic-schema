import {assertNotEmpty} from "../../api/assertions";
import {Message} from "../message";

export interface IsMarketItem extends Message {
    __type__: "market/is-market-item"
    assetId: string
    owner: string
}

export class IsMarketItemValidator {
    public static isInstance(object: any): object is IsMarketItem {
        return object["__type__"] === "market/is-market-item";
    }

    public validate(message: IsMarketItem): Promise<IsMarketItem> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotEmpty(e, "owner"));
    }
}
