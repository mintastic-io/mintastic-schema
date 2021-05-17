import {LinkPaymentAccount, LinkPaymentAccountValidator} from "../../src/message/credit/link-payment-account";

describe("link-payment-account schema tests", function () {
    test("valid", async () => {
        const message: LinkPaymentAccount = {
            __type__: "credit/link-payment-account"
        }
        await new LinkPaymentAccountValidator().validate(message)
    });
})