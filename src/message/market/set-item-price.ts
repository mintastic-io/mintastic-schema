import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNumeric} from "../../api/assertions";

export interface SetItemPrice extends Message {
    type: "market/set-item-price"
    owner: string
    assetId: string
    price: string
}

export class SetItemPriceImpl extends AbstractMessage implements SetItemPrice {
    readonly type = "market/set-item-price"
    readonly owner: string
    readonly assetId: string
    readonly price: string

    constructor(message: SetItemPrice) {
        super(message);
        this.owner = message.owner
        this.assetId = message.assetId
        this.price = message.price
    }

    public static isInstance(object: any): object is SetItemPrice {
        return object["type"] === "market/set-item-price";
    }

    public validate(): Promise<SetItemPrice> {
        return Promise.resolve(this as SetItemPrice)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
    }

    public toServer(sub: string): Promise<SetItemPrice> {
        return Promise.resolve(this);
    }
}