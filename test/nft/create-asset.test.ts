import {CreateAsset, toImplementation} from "../../src";
import {v4 as uuid} from "uuid"

describe("mintastic create-asset schema tests", function () {
    test("valid message", async () => {
        const message:CreateAsset = {
            type: "nft/create-asset",
            dryRun: false,
            asset: {
                royalty: "0.1",
                address: `0x${uuid()}`,
                content: {a:0, b:1},
                series: 0,
                type: 0
            },
            maxSupply: 10
        }
        await toImplementation(message).then(e => e.validate("client"))
    });
    test("enhance message", async () => {
        const message:CreateAsset = {
            type: "nft/create-asset",
            dryRun: false,
            asset: {
                royalty: "0.1",
                address: `0x${uuid()}`,
                content: {a:0, b:1},
                series: 0,
                type: 0
            },
            maxSupply: 10
        }
        const enhanced = await toImplementation(message).then(e => e.toServer(uuid())) as CreateAsset
        expect(enhanced.asset.assetId).not.toBeUndefined()
        expect(enhanced.asset.creatorId).not.toBeUndefined()
    });
})