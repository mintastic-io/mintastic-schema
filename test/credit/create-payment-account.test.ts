import {CreatePaymentAccount, CreatePaymentAccountValidator} from "../../src";

describe("create-payment-account schema tests", function () {
    test("valid", async () => {
        const message: CreatePaymentAccount = {
            __type__: "credit/create-payment-account"
        }
        await new CreatePaymentAccountValidator().validate(message)
    });
})