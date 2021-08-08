import {Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";
import {Token} from "../../api/types";

export interface DeleteAsset extends Message {
    __type__: "nft/delete-asset"
    assetId: string
}

export class DeleteAssetValidator {
    public static isInstance(object: any): object is DeleteAsset {
        return object["__type__"] === "nft/delete-asset";
    }

    public validate(message: DeleteAsset, token: Token): Promise<DeleteAsset> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
    }
}