import React, { createContext, useState } from 'react';

interface CartContextType {
    count: number;
    increment: (n: number) => void;
    decrement: (n: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0);

    const increment = (n: number) => setCount(prev => prev + n);
    const decrement = (n: number) => setCount(prev => (prev - n >= 0 ? prev - n : 0));

    return (
        <CartContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
