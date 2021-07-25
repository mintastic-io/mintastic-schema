import {ReadSupply, ReadSupplyValidator} from "../../src";

describe("read-supply schema tests", function () {
    test("valid", async () => {
        const message: ReadSupply = {__type__: "nft/read-supply", assetId: "asdf"}
        await new ReadSupplyValidator().validate(message);
    });
    test("invalid assetId", async () => {
        const message: ReadSupply = {__type__: "nft/read-supply", assetId: ""}
        await expect(new ReadSupplyValidator().validate(message)).rejects.toContain("assetId");
    });
})