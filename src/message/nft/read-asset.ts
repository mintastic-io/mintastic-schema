import {Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";

export interface ReadAsset extends Message {
    __type__: "nft/read-asset",
    assetId: string
}

export class ReadAssetValidator {
    public static isInstance(object: any): object is ReadAsset {
        return object["__type__"] === "nft/read-asset";
    }

    public validate(message: ReadAsset): Promise<ReadAsset> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
    }
}
