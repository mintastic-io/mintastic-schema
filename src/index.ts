import {SetExchangeRateValidator} from "./message/credit/set-exchange-rate";
import {SignUrl, SignUrlValidator} from "./message/cloud/sign-url";
import {AbortBid, AbortBidValidator} from "./message/market/abort-bid";
import {AcceptBid, AcceptBidValidator} from "./message/market/accept-bid";
import {BidWithFiat, BidWithFiatValidator} from "./message/market/bid-with-fiat";
import {BidWithFlow, BidWithFlowValidator} from "./message/market/bid-with-flow";
import {BuyWithFiat, BuyWithFiatValidator} from "./message/market/buy-with-fiat";
import {BuyWithFlow, BuyWithFlowValidator} from "./message/market/buy-with-flow";
import {CreateLazyOffer, CreateLazyOfferValidator} from "./message/market/create-lazy-offer";
import {CreateListOffer, CreateListOfferValidator} from "./message/market/create-list-offer";
import {RejectBid, RejectBidValidator} from "./message/market/reject-bid";
import {SetBlockLimit, SetBlockLimitValidator} from "./message/market/set-block-limit";
import {SetItemPrice, SetItemPriceValidator} from "./message/market/set-item-price";
import {SetMarketFee, SetMarketFeeValidator} from "./message/market/set-market-fee";
import {CreateAsset, CreateAssetValidator} from "./message/nft/create-asset";
import {LockSeries, LockSeriesValidator} from "./message/nft/lock-series";
import {Mint, MintValidator} from "./message/nft/mint";
import {SetMaxSupply, SetMaxSupplyValidator} from "./message/nft/set-max-supply";
import {Message} from "./message/message";
import createHmac from "create-hmac/browser";
import {AssetExistsValidator} from "./message/cloud/asset-exists";
import {FiatPaymentValidator} from "./message/credit/fiat-payment";
import {LockOfferingValidator} from "./message/market/lock-offering";
import {UnlockOfferingValidator} from "./message/market/unlock-offering";
import {FiatBidPaymentValidator} from "./message/credit/fiat-bid-payment";
import {TransferValidator} from "./message/nft/transfer";
import {CreatePaymentAccountValidator} from "./message/credit/create-payment-account";
import {LinkPaymentAccountValidator} from "./message/credit/link-payment-account";
import {ReadPaymentAccountValidator} from "./message/credit/read-payment-account";
import {Token} from "./api/types";
import {ReadAllCreatedAssetsValidator, ReadCreatedAssetsValidator} from "./message/nft/read-created-assets";
import {ReadAssetValidator} from "./message/nft/read-asset";
import {RegisterCreatorValidator} from "./message/account/register-creator";
import {ReadMarketItemValidator} from "./message/market/read-market-item";
import {IsMarketItemValidator} from "./message/market/is-market-item";
import {ReadUserValidator} from "./message/account/read-user";
import {ReadAssetsValidator} from "./message/nft/read-assets";
import {CreateAccountValidator} from "./message/account/create-account";
import {ReadOwnedAssetsValidator} from "./message/nft/read-owned-assets";
import {GetAccountValidator} from "./message/account/get-account";
import {GetOrCreateAccountValidator} from "./message/account/get-or-create-account";
import {ReadSupplyValidator} from "./message/nft/read-supply";
import {WriteUserValidator} from "./message/account/write-user";
import {SignUpValidator} from "./message/auth";

export {Message} from "./message/message";
export {Token, IdToken} from "./api/types";

// cloud messages
export {SignUrl, SignUrlValidator} from "./message/cloud/sign-url";

// account messages
export {RegisterCreator, RegisterCreatorValidator} from "./message/account/register-creator";
export {ReadUser, ReadUserValidator} from "./message/account/read-user";
export {CreateAccount, CreateAccountValidator} from "./message/account/create-account";
export {GetAccount, GetAccountValidator} from "./message/account/get-account";
export {GetOrCreateAccount, GetOrCreateAccountValidator} from "./message/account/get-or-create-account";

// market messages
export {AbortBid, AbortBidValidator} from "./message/market/abort-bid";
export {AcceptBid, AcceptBidValidator} from "./message/market/accept-bid";
export {BidWithFiat, BidWithFiatValidator} from "./message/market/bid-with-fiat";
export {BidWithFlow, BidWithFlowValidator} from "./message/market/bid-with-flow";
export {BuyWithFiat, BuyWithFiatValidator} from "./message/market/buy-with-fiat";
export {BuyWithFlow, BuyWithFlowValidator} from "./message/market/buy-with-flow";
export {CreateLazyOffer, CreateLazyOfferValidator} from "./message/market/create-lazy-offer";
export {CreateListOffer, CreateListOfferValidator} from "./message/market/create-list-offer";
export {RejectBid, RejectBidValidator} from "./message/market/reject-bid";
export {SetBlockLimit, SetBlockLimitValidator} from "./message/market/set-block-limit";
export {SetItemPrice, SetItemPriceValidator} from "./message/market/set-item-price";
export {SetMarketFee, SetMarketFeeValidator} from "./message/market/set-market-fee";
export {LockOffering, LockOfferingValidator} from "./message/market/lock-offering";
export {UnlockOffering, UnlockOfferingValidator} from "./message/market/unlock-offering";
export {ReadMarketItem, ReadMarketItemValidator} from "./message/market/read-market-item";
export {IsMarketItem, IsMarketItemValidator} from "./message/market/is-market-item";

// nft messages
export {CreateAsset, CreateAssetValidator} from "./message/nft/create-asset";
export {LockSeries, LockSeriesValidator} from "./message/nft/lock-series";
export {Mint, MintValidator} from "./message/nft/mint";
export {SetMaxSupply, SetMaxSupplyValidator} from "./message/nft/set-max-supply";
export {Transfer, TransferValidator} from "./message/nft/transfer";
export {ReadCreatedAssets, ReadCreatedAssetsValidator} from "./message/nft/read-created-assets";
export {ReadAsset, ReadAssetValidator} from "./message/nft/read-asset";
export {ReadAssets, ReadAssetsValidator} from "./message/nft/read-assets";
export {ReadOwnedAssets, ReadOwnedAssetsValidator} from "./message/nft/read-owned-assets";
export {ReadSupply, ReadSupplyValidator} from "./message/nft/read-supply";

// credit messages
export {SetExchangeRate, SetExchangeRateValidator} from "./message/credit/set-exchange-rate";
export {FiatPayment, FiatPaymentValidator} from "./message/credit/fiat-payment";
export {FiatBidPayment, FiatBidPaymentValidator} from "./message/credit/fiat-bid-payment";
export {CreatePaymentAccount, CreatePaymentAccountValidator} from "./message/credit/create-payment-account";
export {LinkPaymentAccount, LinkPaymentAccountValidator} from "./message/credit/link-payment-account";
export {ReadPaymentAccount, ReadPaymentAccountValidator} from "./message/credit/read-payment-account";

export function validateUnauthorizedMessage(message: Message): Promise<Message> {
    if (ReadAssetValidator.isInstance(message)) return Promise.resolve(new ReadAssetValidator().validate(message));
    if (ReadAllCreatedAssetsValidator.isInstance(message)) return Promise.resolve(new ReadAllCreatedAssetsValidator().validate(message));
    if (ReadUserValidator.isInstance(message)) return Promise.resolve(new ReadUserValidator().validate(message));
    if (SignUpValidator.isInstance(message)) return Promise.resolve(new SignUpValidator().validate(message));

    return Promise.reject(`unknown message type ${message["__type__"]}`);
}


export function validateAuthorizedMessage(message: Message, token: Token): Promise<Message> {
    if (AbortBidValidator.isInstance(message)) return Promise.resolve(new AbortBidValidator().validate(message));
    if (SignUrlValidator.isInstance(message)) return Promise.resolve(new SignUrlValidator().validate(message, token));
    if (AcceptBidValidator.isInstance(message)) return Promise.resolve(new AcceptBidValidator().validate(message));
    if (BidWithFiatValidator.isInstance(message)) return Promise.resolve(new BidWithFiatValidator().validate(message));
    if (BidWithFlowValidator.isInstance(message)) return Promise.resolve(new BidWithFlowValidator().validate(message));
    if (BuyWithFiatValidator.isInstance(message)) return Promise.resolve(new BuyWithFiatValidator().validate(message));
    if (BuyWithFlowValidator.isInstance(message)) return Promise.resolve(new BuyWithFlowValidator().validate(message));
    if (CreateLazyOfferValidator.isInstance(message)) return Promise.resolve(new CreateLazyOfferValidator().validate(message));
    if (CreateListOfferValidator.isInstance(message)) return Promise.resolve(new CreateListOfferValidator().validate(message));
    if (RejectBidValidator.isInstance(message)) return Promise.resolve(new RejectBidValidator().validate(message));
    if (SetBlockLimitValidator.isInstance(message)) return Promise.resolve(new SetBlockLimitValidator().validate(message));
    if (SetItemPriceValidator.isInstance(message)) return Promise.resolve(new SetItemPriceValidator().validate(message));
    if (SetMarketFeeValidator.isInstance(message)) return Promise.resolve(new SetMarketFeeValidator().validate(message));
    if (CreateAssetValidator.isInstance(message)) return Promise.resolve(new CreateAssetValidator().validate(message, token));
    if (LockSeriesValidator.isInstance(message)) return Promise.resolve(new LockSeriesValidator().validate(message, token));
    if (MintValidator.isInstance(message)) return Promise.resolve(new MintValidator().validate(message));
    if (SetMaxSupplyValidator.isInstance(message)) return Promise.resolve(new SetMaxSupplyValidator().validate(message));
    if (SetExchangeRateValidator.isInstance(message)) return Promise.resolve(new SetExchangeRateValidator().validate(message));
    if (AssetExistsValidator.isInstance(message)) return Promise.resolve(new AssetExistsValidator().validate(message));
    if (FiatPaymentValidator.isInstance(message)) return Promise.resolve(new FiatPaymentValidator().validate(message));
    if (FiatBidPaymentValidator.isInstance(message)) return Promise.resolve(new FiatBidPaymentValidator().validate(message));
    if (LockOfferingValidator.isInstance(message)) return Promise.resolve(new LockOfferingValidator().validate(message));
    if (UnlockOfferingValidator.isInstance(message)) return Promise.resolve(new UnlockOfferingValidator().validate(message));
    if (TransferValidator.isInstance(message)) return Promise.resolve(new TransferValidator().validate(message));
    if (CreatePaymentAccountValidator.isInstance(message)) return Promise.resolve(new CreatePaymentAccountValidator().validate(message));
    if (LinkPaymentAccountValidator.isInstance(message)) return Promise.resolve(new LinkPaymentAccountValidator().validate(message));
    if (ReadPaymentAccountValidator.isInstance(message)) return Promise.resolve(new ReadPaymentAccountValidator().validate(message));
    if (ReadCreatedAssetsValidator.isInstance(message)) return Promise.resolve(new ReadCreatedAssetsValidator().validate(message));
    if (ReadAssetValidator.isInstance(message)) return Promise.resolve(new ReadAssetValidator().validate(message));
    if (RegisterCreatorValidator.isInstance(message)) return Promise.resolve(new RegisterCreatorValidator().validate(message));
    if (ReadMarketItemValidator.isInstance(message)) return Promise.resolve(new ReadMarketItemValidator().validate(message));
    if (IsMarketItemValidator.isInstance(message)) return Promise.resolve(new IsMarketItemValidator().validate(message));
    if (ReadAssetsValidator.isInstance(message)) return Promise.resolve(new ReadAssetsValidator().validate(message));
    if (CreateAccountValidator.isInstance(message)) return Promise.resolve(new CreateAccountValidator().validate(message));
    if (ReadOwnedAssetsValidator.isInstance(message)) return Promise.resolve(new ReadOwnedAssetsValidator().validate(message));
    if (GetAccountValidator.isInstance(message)) return Promise.resolve(new GetAccountValidator().validate(message));
    if (GetOrCreateAccountValidator.isInstance(message)) return Promise.resolve(new GetOrCreateAccountValidator().validate(message));
    if (ReadSupplyValidator.isInstance(message)) return Promise.resolve(new ReadSupplyValidator().validate(message));
    if (WriteUserValidator.isInstance(message)) return Promise.resolve(new WriteUserValidator().validate(message));

    return validateUnauthorizedMessage(message);
}

export function getAssetId(creatorId: string, assetName: string): string {
    const hmac = createHmac('sha256', Buffer.from(creatorId));
    hmac.update(assetName)
    const hex = hmac.digest("hex").toString("utf-8");

    // create uuid format asset id
    const segment1 = hex.substring(0, 8);
    const segment2 = hex.substring(8, 12);
    const segment3 = hex.substring(12, 16);
    const segment4 = hex.substring(16, 20);
    const segment5 = hex.substring(20, 32);

    return `${segment1}-${segment2}-${segment3}-${segment4}-${segment5}`
}
