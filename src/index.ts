
import { Checkout } from "./components/checkout";
import { PRICING_RUILES } from "./constants/pricingRules";
import { PRODUCTS } from "./constants/products";


const checkout = Checkout(PRICING_RUILES);

checkout.scan(PRODUCTS.get("atv")!)
checkout.scan(PRODUCTS.get("atv")!)
checkout.scan(PRODUCTS.get("atv")!)
checkout.scan(PRODUCTS.get("vga")!)

console.log(checkout.total()); // 249

checkout.clear();

checkout.scan(PRODUCTS.get("atv")!)
checkout.scan(PRODUCTS.get("ipd")!)
checkout.scan(PRODUCTS.get("ipd")!)
checkout.scan(PRODUCTS.get("atv")!)
checkout.scan(PRODUCTS.get("ipd")!)
checkout.scan(PRODUCTS.get("ipd")!)
checkout.scan(PRODUCTS.get("ipd")!)

console.log(checkout.total()); // 2718.95