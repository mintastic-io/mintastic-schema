import {ReadAssets, ReadAssetsValidator} from "../../src";

describe("read-assets schema tests", function () {
    test("valid", async () => {
        const message: ReadAssets = {__type__: "nft/read-assets", assetIds: ["asdf"]}
        await new ReadAssetsValidator().validate(message);
    });
})