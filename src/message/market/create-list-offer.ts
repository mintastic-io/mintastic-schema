import {Message} from "../message";
import {assertNotEmpty, assertNumeric} from "../../api/assertions";

export interface CreateListOffer extends Message {
    __type__: "market/create-list-offer"
    owner: string
    assetId: string
    price: string
}

export class CreateListOfferValidator {
    public static isInstance(object: any): object is CreateListOffer {
        return object["__type__"] === "market/create-list-offer";
    }

    public validate(message: CreateListOffer): Promise<CreateListOffer> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
    }
}