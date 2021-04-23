import {CreateAsset, toImplementation} from "../../src";
import {v4 as uuid} from "uuid"

describe("mintastic create-asset schema tests", function () {
    test("valid message", async () => {
        const creatorId = uuid();
        const message:CreateAsset = {
            type: "nft/create-asset",
            dryRun: false,
            asset: {
                assetId: uuid(),
                creatorId: creatorId,
                royalty: "0.1",
                address: `0x${uuid()}`,
                content: "{a:0}",
                series: 0,
                type: 0
            },
            maxSupply: 10
        }
        await toImplementation(message).then(e => e.validate(creatorId))
    });
})