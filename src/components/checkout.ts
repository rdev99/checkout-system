import { PricingRule } from "../interfaces/pricingRule";
import { Product } from "../interfaces/product";
import { processPricingRules } from "./pricingRulesProcessor";


export function Checkout(pricingRules: Map<string,PricingRule>) {
    
    let items: Map<Product, number> = new Map;

    function clear() {
        items.clear();
    }

    const scan = (product: Product) => {
        if(items.has(product)) {
            items.set(product,items.get(product)!+1);
        }
        else {
            items.set(product,1);
        }
    }

    function total() {
        return processPricingRules(pricingRules,items);
    }
    return {
        scan,
        total,
        clear
    }
}