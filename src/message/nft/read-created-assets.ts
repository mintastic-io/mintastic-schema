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

export interface ReadAllCreatedAssets extends Message {
    __type__: "nft/read-all-created-assets"
}

export class ReadAllCreatedAssetsValidator {
    public static isInstance(object: any): object is ReadAllCreatedAssets {
        return object["__type__"] === "nft/read-all-created-assets";
    }

    public validate(message: ReadAllCreatedAssets): Promise<ReadAllCreatedAssets> {
        return Promise.resolve(message)
    }
}