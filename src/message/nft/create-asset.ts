import {AbstractMessage, Message} from "../message";
import {Asset} from "../../api/types";
import {assertNotEmpty, assertNotNegative, assertNotNull, assertNull, assertNumeric} from "../../api/assertions";
import {v4 as uuid} from "uuid"

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

    public validate(source): Promise<CreateAsset> {
        return Promise.resolve(this as CreateAsset)
            .then(e => assertNotNull(e, "asset"))
            .then(e => (source === "client") ? assertNull(e, "asset.assetId") : e)
            .then(e => (source === "server") ? assertNotEmpty(e, "asset.assetId") : e)
            .then(e => (source === "client") ? assertNull(e, "asset.clientId") : e)
            .then(e => (source === "server") ? assertNotEmpty(e, "asset.clientId") : e)
            .then(e => assertNotNull(e, "asset.content"))
            .then(e => assertNotEmpty(e, "asset.address"))
            .then(e => assertNumeric(e, "asset.royalty"))
            .then(e => assertNotNegative(e, "asset.series"))
            .then(e => assertNotNegative(e, "asset.type"))
            .then(e => assertNotNegative(e, "maxSupply"))
    }

    public toServer(sub: string): Promise<CreateAsset> {
        const asset = Object.assign(this.asset, {creatorId: sub, assetId: uuid()})
        return Promise.resolve(Object.assign(this, {asset}))
    }
}