import {CreateAsset, CreateAssetValidator, getAssetId} from "../../src";
import {v4 as uuid} from "uuid"

describe("mintastic create-asset schema tests", function () {
    test("valid message", async () => {
        const creatorId = uuid();
        const assetId = getAssetId(creatorId, "test");
        const message: CreateAsset = {
            __type__: "nft/create-asset",
            dryRun: false,
            assetId: assetId,
            creatorId: creatorId,
            royalty: "0.1",
            addresses: [{address: `0x${uuid()}`, share: 1.0}],
            content: "{a:0}",
            series: 0,
            type: 0,
            maxSupply: 10
        }
        await new CreateAssetValidator().validate(message, {sub: creatorId})
    });
})