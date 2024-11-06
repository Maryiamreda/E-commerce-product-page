import { useState } from "react";
import Plus from '../../../public/images/icon-plus.svg'
import Minus from '../../../public/images/icon-minus.svg'
import Cart from '../../../public/images/icon-cart.svg'
import styles from './sneakerCard.module.scss'
import { useCart } from "../../context/CartContext";
const SneakerCard = () => {
    const { count, setCount } = useCart();
    const counter = (n: number) => {
        if (count + n < 0) return;
        setCount(count + n);
    }
    return (

        <div className={styles.container}>
            <h5 >  Sneaker Company
            </h5>
            <h1>  Fall Limited Edition Sneakers
            </h1>
            <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div style={{ display: "flex", gap: "20px" }}>
                <h2><b>  $125.00</b></h2>
                <b className={styles.percentageDisplay}>50%</b>
            </div>
            <p style={{ fontWeight: "600" }}><del>  $250.00
            </del></p>
            <div className={styles.buyButtons}>
                <div className={styles.quantitySelector}>
                    <img src={Minus} width={13} height={4} style={{ paddingTop: "9px" }} onClick={() => counter(-1)} />
                    <div>{count}</div>
                    <img src={Plus} width={11} height={10} onClick={() => counter(1)} />
                </div>
                <div className={styles.addToCartButton} onClick={() => counter(1)}>
                    <img src={Cart} className={styles.cartIcon} />
                    Add to cart

                </div>
            </div>
        </div>);
}

export default SneakerCard;