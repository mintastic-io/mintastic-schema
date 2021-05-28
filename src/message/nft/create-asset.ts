import {Message} from "../message";
import {
    assertEquals,
    assertMaxLength,
    assertNotEmpty,
    assertNotNegative,
    assertNotNull,
    assertNumeric
} from "../../api/assertions";
import {getAssetId} from "../../index";
import {Token} from "../../api/types";

export interface CreateAsset extends Message {
    __type__: "nft/create-asset"
    assetId: string
    creatorId: string
    assetName: string
    assetDesc: string
    address: string
    addresses: { address: string, share: string }[]
    content: string
    royalty: string
    series: number
    type: number
    maxSupply: number
}

export class CreateAssetValidator {
    public static isInstance(object: any): object is CreateAsset {
        return object["__type__"] === "nft/create-asset";
    }

    public validate(message: CreateAsset, token: Token): Promise<CreateAsset> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotEmpty(e, "creatorId"))
            .then(e => assertNotEmpty(e, "assetName"))
            .then(e => assertNotEmpty(e, "assetDesc"))
            .then(e => assertMaxLength(e, "assetName", 100))
            .then(e => assertMaxLength(e, "assetDesc", 1000))
            .then(e => assertEquals(e, "assetId", getAssetId(message.creatorId, message.assetName)))
            .then(e => assertEquals(e, "creatorId", token.getCreatorId()))
            .then(e => assertNotNull(e, "content"))
            .then(e => assertNotEmpty(e, "address"))
            .then(e => assertNotEmpty(e, "addresses"))
            .then(e => assertNumeric(e, "royalty"))
            .then(e => assertNotNegative(e, "series"))
            .then(e => assertNotNegative(e, "type"))
            .then(e => assertNotNegative(e, "maxSupply"))
    }
}