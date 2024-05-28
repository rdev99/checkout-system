import { PRODUCTS } from "../constants/products";
import { DiscountTypes } from "../enums/discountTypes";
import { PricingRule } from "../interfaces/pricingRule";
import { Product } from "../interfaces/product";

function calculatePrice(noOfItems:number,price:number) {
    return noOfItems*price;
}

function applyDiscountOnPrice(noOfItems:number, pricingRule:PricingRule,price:number) {
    let costOfProduct;
    switch(pricingRule.type) {
        case DiscountTypes.ItemDiscount: {
            let discountedNoOfItems = Math.floor(noOfItems*pricingRule.value);
            costOfProduct = calculatePrice((noOfItems-discountedNoOfItems),price);
            break;
        }
        case DiscountTypes.PriceDiscount: {
            costOfProduct = calculatePrice(noOfItems,pricingRule.value);
            break;
        }
    }
    return costOfProduct;
}

export function ProcessPricingRules(pricingRules: Map<string,PricingRule>, shoppingCart: Map<Product,number>) {
    let totalCost = 0;
    for(let [key, value] of shoppingCart) {
        let costOfProduct = 0;
        if(pricingRules.has(key.sku)) {
            let pricingRule = pricingRules.get(key.sku)!;
            let conditionMet = true;
            for(let discountCondition of  pricingRule.discountCondition) {
                if(!(shoppingCart.get(PRODUCTS.get(discountCondition.sku)!)! >= discountCondition.noOfItem)) {
                    conditionMet = false;
                }
            }
            if(conditionMet) {
                costOfProduct = applyDiscountOnPrice(value,pricingRule,key.price);
            }
            else {
                costOfProduct = calculatePrice(value,key.price);
            }
        }
        else {
            costOfProduct = calculatePrice(value,key.price);
        }
        totalCost+=costOfProduct;
    }
    return totalCost;
}