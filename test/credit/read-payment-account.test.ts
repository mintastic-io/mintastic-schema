import {ReadPaymentAccount, ReadPaymentAccountValidator} from "../../src/message/credit/read-payment-account";

describe("read-payment-account schema tests", function () {
    test("valid", async () => {
        const message: ReadPaymentAccount = {
            __type__: "credit/read-payment-account"
        }
        await new ReadPaymentAccountValidator().validate(message)
    });
})