import {SignUrlImpl} from "../../src/message/cloud/sign-url";

describe("set-exchange-rate schema tests", function () {
    test("valid", async () => {
        const message = new SignUrlImpl({type: "cloud/sign-url", fileName: "abc"})
        await message.validate()
    });
    test("invalid file name", async () => {
        const message = new SignUrlImpl({type: "cloud/sign-url", fileName: ""})
        await expect(message.validate()).rejects.toBe("fileName must not be empty")
    });
})