import {AbstractMessage, Message} from "../message";
import {Asset} from "../../api/types";
import {assertEquals, assertNotEmpty, assertNotNegative, assertNotNull, assertNumeric} from "../../api/assertions";

export interface CreateAsset extends Message {
    type: "nft/create-asset"
    asset: Asset
    maxSupply: number
}

export class CreateAssetImpl extends AbstractMessage implements CreateAsset {
    readonly type = "nft/create-asset"
    readonly asset: Asset
    readonly maxSupply: number

    constructor(message: CreateAsset) {
        super(message);
        this.asset = message.asset
        this.maxSupply = message.maxSupply
    }

    public static isInstance(object: any): object is CreateAsset {
        return object["type"] === "nft/create-asset";
    }

    public validate(sub): Promise<CreateAsset> {
        return Promise.resolve(this as CreateAsset)
            .then(e => assertNotNull(e, "asset"))
            .then(e => assertNotEmpty(e, "asset.assetId"))
            .then(e => assertNotEmpty(e, "asset.creatorId"))
            .then(e => assertEquals(e, "asset.creatorId", sub))
            .then(e => assertNotNull(e, "asset.content"))
            .then(e => assertNotEmpty(e, "asset.address"))
            .then(e => assertNumeric(e, "asset.royalty"))
            .then(e => assertNotNegative(e, "asset.series"))
            .then(e => assertNotNegative(e, "asset.type"))
            .then(e => assertNotNegative(e, "maxSupply"))
    }
}