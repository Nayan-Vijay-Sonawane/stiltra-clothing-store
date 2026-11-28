import type { CartItem } from "@/types/cart";

const CART_STORAGE_KEY = "stiltra-cart";

export function getCartItems(): CartItem[] {
    if(typeof window === "undefined"){
        return [];
    }

    try{
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);

        if(!storedCart){
            return [];
        }

        const parsedCart = JSON.parse(storedCart);

        if(!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart.filter(

            (item): item is CartItem => 
                item && 
                typeof item.productId === "string" &&
                typeof item.name === "string" && 
                typeof item.price === "number" &&
                typeof item.size === "string" &&
                typeof item.color === "string" &&
                Number.isInteger(item.quantity) && 
                item.quantity > 0

        );
    } catch {
        console.log("Unable to read cart data.");
        return [];
    }
}

export function saveCartItems(items: CartItem[]): void {
    if(typeof window === "undefined") {
        return ;
    }

    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(items)
    );

    window.dispatchEvent(
        new Event("stiltra-cart-updated")
    );

}


export function getCartSubtotal(items: CartItem[]): number{
    return items.reduce(
        
        (total, item) => total + item.price * item.quantity,
        0
        
    );
}

export function formatPrice(price: number): string{
    return `₹${price.toLocaleString("en-IN")}`;
}