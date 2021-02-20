import React from "react";
import { useCallback, useRef } from "react";

export function AddToCart() {
    const ref = useRef<HTMLButtonElement>(null);
    const onClick = useCallback(() => {
        const event = new CustomEvent("add-to-cart", {
            bubbles: true,
            detail: { sku: "012", qty: 1 },
        });
        ref.current.dispatchEvent(event);
    }, []);
    return (
        <button
            className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            ref={ref}
            onClick={onClick}
            type="button"
        >
            <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
        </button>
    );
}

export default AddToCart;