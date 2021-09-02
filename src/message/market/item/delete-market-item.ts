import {Message} from "../../message";
import {assertNotEmpty} from "../../../api/assertions";

export interface DeleteMarketItem extends Message {
    __type__: "market/delete-item"
    ownerId: string
    assetId: string
    isLazy: boolean
}

export class DeleteMarketItemValidator {
    public static isInstance(object: any): object is DeleteMarketItem {
        return object["__type__"] === "market/delete-item";
    }

    public validate(message: DeleteMarketItem): Promise<DeleteMarketItem> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "ownerId"))
            .then(e => assertNotEmpty(e, "assetId"))
    }
}