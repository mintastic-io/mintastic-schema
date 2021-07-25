import {GetAccount, GetAccountValidator} from "../../src";

describe("get-account schema tests", function () {
    test("valid", async () => {
        const message: GetAccount = {__type__: "account/get-account"}
        await new GetAccountValidator().validate(message);
    });
})