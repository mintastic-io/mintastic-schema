import {ReadAsset, ReadAssetValidator} from "../../src";

describe("read-asset schema tests", function () {
    test("valid", async () => {
        const message: ReadAsset = {__type__: "nft/read-asset", assetId: "asdf"}
        await new ReadAssetValidator().validate(message);
    });
    test("invalid assetId", async () => {
        const message: ReadAsset = {__type__: "nft/read-asset", assetId: ""}
        await expect(new ReadAssetValidator().validate(message)).rejects.toContain("assetId");
    });
})