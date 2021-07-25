import {GetOrCreateAccount, GetOrCreateAccountValidator} from "../../src";

describe("get-or-create-account schema tests", function () {
    test("valid", async () => {
        const message: GetOrCreateAccount = {__type__: "account/get-or-create-account"}
        await new GetOrCreateAccountValidator().validate(message);
    });
})