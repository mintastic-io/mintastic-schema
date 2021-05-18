import {ReadAssetIdsValidator, ReadCreatedAssets} from "../../src/message/nft/read-created-assets";

describe("read-asset-ids schema tests", function () {
    test("valid", async () => {
        const message: ReadCreatedAssets = {__type__: "nft/read-created-assets"}
        await new ReadAssetIdsValidator().validate(message);
    });
})