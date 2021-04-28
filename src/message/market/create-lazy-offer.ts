import {Message} from "../message";
import {assertNotEmpty, assertNumeric} from "../../api/assertions";

export interface CreateLazyOffer extends Message {
    __type__: "market/create-lazy-offer"
    owner: string
    assetId: string
    price: string
}

export class CreateLazyOfferValidator {
    public static isInstance(object: any): object is CreateLazyOffer {
        return object["__type__"] === "market/create-lazy-offer";
    }

    public validate(message: CreateLazyOffer): Promise<CreateLazyOffer> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
    }
}