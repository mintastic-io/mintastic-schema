import {ReadOwnedAssets, ReadOwnedAssetsValidator} from "../../src";

describe("read-owned-asset schema tests", function () {
    test("valid", async () => {
        const message: ReadOwnedAssets = {__type__: "nft/read-owned-assets"}
        await new ReadOwnedAssetsValidator().validate(message);
    });
})