import {CreateAsset, CreateAssetValidator, getAssetId} from "../../src";
import {v4 as uuid} from "uuid"
import {JWT} from "../tokens";

describe("mintastic create-asset schema tests", function () {
    test("valid message", async () => {
        const creatorId = "83860f23-4b38-407d-a499-ef99bf8b6d42";
        const assetId = getAssetId(creatorId, "test");
        const message: CreateAsset = {
            __type__: "nft/create-asset",
            dryRun: false,
            assetId: assetId,
            creatorId: creatorId,
            assetName: "test",
            assetDesc: "test",
            royalty: "0.1",
            addresses: [{address: `0x${uuid()}`, share: "1.0"}],
            content: "{a:0}",
            series: 0,
            type: 0,
            maxSupply: 10
        }
        await new CreateAssetValidator().validate(message, JWT)
    });
    test("asset name is too long", async () => {
        const creatorId = "83860f23-4b38-407d-a499-ef99bf8b6d42";
        const assetId = getAssetId(creatorId, "test");
        const message: CreateAsset = {
            __type__: "nft/create-asset",
            dryRun: false,
            assetId: assetId,
            creatorId: creatorId,
            assetName: new Array(102).join("."),
            assetDesc: "test",
            royalty: "0.1",
            addresses: [{address: `0x${uuid()}`, share: "1.0"}],
            content: "{a:0}",
            series: 0,
            type: 0,
            maxSupply: 10
        }
        await expect(new CreateAssetValidator().validate(message, JWT)).rejects.toContain("too long")
    });
    test("asset description is too long", async () => {
        const creatorId = "83860f23-4b38-407d-a499-ef99bf8b6d42";
        const assetId = getAssetId(creatorId, "test");
        const message: CreateAsset = {
            __type__: "nft/create-asset",
            dryRun: false,
            assetId: assetId,
            creatorId: creatorId,
            assetName: "test",
            assetDesc: new Array(1002).join("."),
            royalty: "0.1",
            addresses: [{address: `0x${uuid()}`, share: "1.0"}],
            content: "{a:0}",
            series: 0,
            type: 0,
            maxSupply: 10
        }
        await expect(new CreateAssetValidator().validate(message, JWT)).rejects.toContain("too long")
    });
})