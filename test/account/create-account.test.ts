import {CreateAccount, CreateAccountValidator} from "../../src";

describe("create-account schema tests", function () {
    test("valid", async () => {
        const message: CreateAccount = {__type__: "account/create-account"}
        await new CreateAccountValidator().validate(message);
    });
})