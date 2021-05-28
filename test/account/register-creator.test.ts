import {RegisterCreator, RegisterCreatorValidator} from "../../src";

describe("register-creator schema tests", function () {
    test("valid", async () => {
        const message: RegisterCreator = {__type__: "account/register-creator", name: "asdf", website: "mintastic.io", status: "featured"}
        await new RegisterCreatorValidator().validate(message);
    });
    test("invalid name", async () => {
        const message: RegisterCreator = {__type__: "account/register-creator", name: "", website: "mintastic.io", status: "featured"}
        await expect(new RegisterCreatorValidator().validate(message)).rejects.toContain("name");
    });
})