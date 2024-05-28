import { DiscountTypes } from "../enums/discountTypes";
import { PricingRule } from "../interfaces/pricingRule";

export const PRICING_RUILES: Map<string,PricingRule> = new Map([["ipd",{
    sku: "ipd",
    value: 499.99,
    type: DiscountTypes.PriceDiscount,
    discountCondition: [{
        sku: "ipd",
        noOfItem: 5
    }]
}],["atv",{
    sku: "atv",
    value: 1/3,
    type: DiscountTypes.ItemDiscount,
    discountCondition: [{
        sku: "atv",
        noOfItem: 3
    }]
}]])