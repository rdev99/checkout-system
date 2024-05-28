import { DiscountTypes } from "../enums/discountTypes";

export interface PricingRule {
    sku: string;
    value: number;
    type: DiscountTypes;
    discountCondition: DiscountCondition[];
}

export interface DiscountCondition {
    sku: string;
    noOfItem: number;
}