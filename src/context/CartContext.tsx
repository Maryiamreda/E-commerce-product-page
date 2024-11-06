// context/CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
    count: number;
    setCount: (count: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0);

    return (
        <CartContext.Provider value={{ count, setCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};