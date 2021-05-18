import {Message} from "../message";

export interface ReadCreatedAssets extends Message {
    __type__: "nft/read-created-assets"
}

export class ReadCreatedAssetsValidator {
    public static isInstance(object: any): object is ReadCreatedAssets {
        return object["__type__"] === "nft/read-created-assets";
    }

    public validate(message: ReadCreatedAssets): Promise<ReadCreatedAssets> {
        return Promise.resolve(message)
    }
}
