import {Message} from "../message";

export interface ReadAssets extends Message {
    __type__: "nft/read-assets",
    assetIds: string[]
}

export class ReadAssetsValidator {
    public static isInstance(object: any): object is ReadAssets {
        return object["__type__"] === "nft/read-assets";
    }

    public validate(message: ReadAssets): Promise<ReadAssets> {
        return Promise.resolve(message)
    }
}
