import {Message} from "../message";
import {assertEquals, assertNotEmpty, assertNotNegative, assertNotNull, assertNumeric} from "../../api/assertions";
import {JwtPayload} from "jwt-decode";

export interface CreateAsset extends Message {
    __type__: "nft/create-asset"
    assetId: string
    creatorId: string
    content: string
    address: string
    royalty: string
    series: number
    type: number
    maxSupply: number
}

export class CreateAssetValidator {
    public static isInstance(object: any): object is CreateAsset {
        return object["__type__"] === "nft/create-asset";
    }

    public validate(message: CreateAsset, jwt: JwtPayload): Promise<CreateAsset> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotEmpty(e, "creatorId"))
            .then(e => assertEquals(e, "creatorId", jwt))
            .then(e => assertNotNull(e, "content"))
            .then(e => assertNotEmpty(e, "address"))
            .then(e => assertNumeric(e, "royalty"))
            .then(e => assertNotNegative(e, "series"))
            .then(e => assertNotNegative(e, "type"))
            .then(e => assertNotNegative(e, "maxSupply"))
    }
}