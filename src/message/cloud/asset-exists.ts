import {Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";

export interface AssetExists extends Message {
    __type__: "cloud/asset-exists"
    assetId: string
}

export class AssetExistsValidator {
    public static isInstance(object: any): object is AssetExists {
        return object["__type__"] === "cloud/asset-exists";
    }

    public validate(message: AssetExists): Promise<AssetExists> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
    }
}