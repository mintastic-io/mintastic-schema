import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNumeric} from "../../api/assertions";

export interface CreateListOffer extends Message {
    type: "market/create-list-offer"
    owner: string
    assetId: string
    price: string
}

export class CreateListOfferImpl extends AbstractMessage implements CreateListOffer {
    readonly type = "market/create-list-offer"
    readonly owner: string
    readonly assetId: string
    readonly price: string

    constructor(message: CreateListOffer) {
        super(message);
        this.owner = message.owner
        this.assetId = message.assetId
        this.price = message.price
    }

    public static isInstance(object: any): object is CreateListOffer {
        return object["type"] === "market/create-list-offer";
    }

    public validate(): Promise<CreateListOffer> {
        return Promise.resolve(this as CreateListOffer)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
    }

    public toServer(sub: string): Promise<Message> {
        return Promise.resolve(this);
    }
}