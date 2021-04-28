import {Message} from "../message";
import {assertNotEmpty, assertNumeric} from "../../api/assertions";

export interface SetItemPrice extends Message {
    __type__: "market/set-item-price"
    owner: string
    assetId: string
    price: string
}

export class SetItemPriceValidator {
    public static isInstance(object: any): object is SetItemPrice {
        return object["__type__"] === "market/set-item-price";
    }

    public validate(message: SetItemPrice): Promise<SetItemPrice> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
    }
}