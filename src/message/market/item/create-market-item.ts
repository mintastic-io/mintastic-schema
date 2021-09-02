import {Message} from "../../message";
import {assertNotEmpty, assertNumeric} from "../../../api/assertions";

export interface CreateMarketItem extends Message {
    __type__: "market/create-item"
    ownerId: string
    assetId: string
    price: string
    isLazy: boolean
}

export class CreateMarketItemValidator {
    public static isInstance(object: any): object is CreateMarketItem {
        return object["__type__"] === "market/create-item";
    }

    public validate(message: CreateMarketItem): Promise<CreateMarketItem> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "ownerId"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
    }
}