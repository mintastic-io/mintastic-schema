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
import {JwtPayload} from "jwt-decode";
import {AssetExistsValidator} from "./message/cloud/asset-exists";

export {Message} from "./message/message";

// cloud messages
export {SignUrl, SignUrlValidator} from "./message/cloud/sign-url";

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

// nft messages
export {CreateAsset, CreateAssetValidator} from "./message/nft/create-asset";
export {LockSeries, LockSeriesValidator} from "./message/nft/lock-series";
export {Mint, MintValidator} from "./message/nft/mint";
export {SetMaxSupply, SetMaxSupplyValidator} from "./message/nft/set-max-supply";

// credit messages
export {SetExchangeRate, SetExchangeRateValidator} from "./message/credit/set-exchange-rate";

export function validate(message: Message, jwt: JwtPayload): Promise<Message> {
    if (AbortBidValidator.isInstance(message))
        return Promise.resolve(new AbortBidValidator().validate(message));
    if (SignUrlValidator.isInstance(message))
        return Promise.resolve(new SignUrlValidator().validate(message, jwt));
    if (AcceptBidValidator.isInstance(message))
        return Promise.resolve(new AcceptBidValidator().validate(message));
    if (BidWithFiatValidator.isInstance(message))
        return Promise.resolve(new BidWithFiatValidator().validate(message));
    if (BidWithFlowValidator.isInstance(message))
        return Promise.resolve(new BidWithFlowValidator().validate(message));
    if (BuyWithFiatValidator.isInstance(message))
        return Promise.resolve(new BuyWithFiatValidator().validate(message));
    if (BuyWithFlowValidator.isInstance(message))
        return Promise.resolve(new BuyWithFlowValidator().validate(message));
    if (CreateLazyOfferValidator.isInstance(message))
        return Promise.resolve(new CreateLazyOfferValidator().validate(message));
    if (CreateListOfferValidator.isInstance(message))
        return Promise.resolve(new CreateListOfferValidator().validate(message));
    if (RejectBidValidator.isInstance(message))
        return Promise.resolve(new RejectBidValidator().validate(message));
    if (SetBlockLimitValidator.isInstance(message))
        return Promise.resolve(new SetBlockLimitValidator().validate(message));
    if (SetItemPriceValidator.isInstance(message))
        return Promise.resolve(new SetItemPriceValidator().validate(message));
    if (SetMarketFeeValidator.isInstance(message))
        return Promise.resolve(new SetMarketFeeValidator().validate(message));
    if (CreateAssetValidator.isInstance(message))
        return Promise.resolve(new CreateAssetValidator().validate(message, jwt));
    if (LockSeriesValidator.isInstance(message))
        return Promise.resolve(new LockSeriesValidator().validate(message, jwt));
    if (MintValidator.isInstance(message))
        return Promise.resolve(new MintValidator().validate(message));
    if (SetMaxSupplyValidator.isInstance(message))
        return Promise.resolve(new SetMaxSupplyValidator().validate(message));
    if (SetExchangeRateValidator.isInstance(message))
        return Promise.resolve(new SetExchangeRateValidator().validate(message));
    if (AssetExistsValidator.isInstance(message))
        return Promise.resolve(new AssetExistsValidator().validate(message));

    return Promise.reject(`unknown message type ${message}`);
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
