import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNumeric} from "../../api/assertions";

export interface CreateLazyOffer extends Message {
    type: "market/create-lazy-offer"
    owner: string
    assetId: string
    price: string
}

export class CreateLazyOfferImpl extends AbstractMessage implements CreateLazyOffer {
    readonly type = "market/create-lazy-offer"
    readonly owner: string
    readonly assetId: string
    readonly price: string

    constructor(message: CreateLazyOffer) {
        super(message);
        this.owner = message.owner
        this.assetId = message.assetId
        this.price = message.price
    }

    public static isInstance(object: any): object is CreateLazyOffer {
        return object["type"] === "market/create-lazy-offer";
    }

    public validate(): Promise<CreateLazyOffer> {
        return Promise.resolve(this as CreateLazyOffer)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
    }
}