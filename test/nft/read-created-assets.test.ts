import {ReadCreatedAssets, ReadCreatedAssetsValidator} from "../../src";

describe("read-asset-ids schema tests", function () {
    test("valid", async () => {
        const message: ReadCreatedAssets = {__type__: "nft/read-created-assets"}
        await new ReadCreatedAssetsValidator().validate(message);
    });
})