import {Message} from "../message";

export interface ReadOwnedAssets extends Message {
    __type__: "nft/read-owned-assets",
    address?:string
}

export class ReadOwnedAssetsValidator {
    public static isInstance(object: any): object is ReadOwnedAssets {
        return object["__type__"] === "nft/read-owned-assets";
    }

    public validate(message: ReadOwnedAssets): Promise<ReadOwnedAssets> {
        return Promise.resolve(message)
    }
}