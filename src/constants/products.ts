import { Product } from "../interfaces/product";

export const PRODUCTS:Map<string,Product> = new Map([
    ["ipd",{sku:"ipd",name:"Super Ipad",price:549.99}],
    ["mbp",{sku:"mbp",name:"MacBook Pro",price:1399.99}],
    ["atv",{sku:"atv",name:"Apple TV",price:109.50}],
    ["vga",{sku:"vga",name:"VGA Adaptor",price:30.00}]
])