import './navBar.module.scss';
import styles from './navBar.module.scss';

import Logo from '../../../public/images/logo.svg';
import Cart from '../../../public/images/icon-cart.svg';
import Avatar from '../../../public/images/image-avatar.png';
import Menu from '../../../public/images/icon-menu.svg';
import CloseButton from '../../../public/images/icon-close.svg';
import Delete from '../../../public/images/icon-delete.svg';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
// import { useCart } from '../../context/CartContext';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleShowCart = () => {
        setShowCart(!showCart);
    };

    const cartContext = useContext(CartContext);
    if (!cartContext) throw new Error("Navbar must be used within a CartProvider");

    const { count, decrement } = cartContext;

    return (
        <>
            <nav>
                <div style={{ display: "inline-flex" }}>
                    <div style={{ paddingTop: "14px", display: "inline-flex", gap: "13px" }}>
                        <img src={Menu} width={20} height={22} className={styles.menuIcon} onClick={toggleMobileMenu} />

                        <img src={Logo} width={140} height={20} />
                    </div>
                    <ul className={styles.desktopNav}>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>

                    </ul></div>
                <div style={{ display: "flex", gap: "25px" }}>
                    <div className={styles.cartContainer}>
                        <img src={Cart} width={20} height={20} className={styles.cartIcon} onClick={toggleShowCart} />
                        {count > 0 && <div className={styles.count}>{count}</div>}
                        {showCart &&
                            <div className={styles.showCart}>
                                <b >Cart</b>
                                <hr style={{ marginTop: "19px" }} />
                                <div>
                                    {count === 0 ? (
                                        <div className={styles.emptyCart}>Your cart is empty.</div>
                                    ) : (
                                        <div>
                                            <div className={styles.checkoutInfo}>
                                                <img src='/images/image-product-1-thumbnail.jpg' width={50} height={50} style={{ borderRadius: "8px" }} />
                                                <div >
                                                    <p style={{ fontSize: "12px", margin: "1px" }}>Fall Limited Edition Sneakers</p>
                                                    <div style={{ lineHeight: "25px" }}> $125.00 × {count}<span><b> ${(125.0 * count).toFixed(2)}</b></span></div>

                                                </div>
                                                <img src={Delete} width={20} height={20} style={{ paddingTop: "10px" }} onClick={() => { decrement(count) }} />
                                            </div>
                                            <div className={styles.checkoutButton}>Checkout</div>
                                        </div>
                                    )}
                                </div>


                            </div>}
                    </div>
                    <img src={Avatar} width={40} height={40} className={styles.avatar} />
                </div>
            </nav>
            <hr style={{ width: "86%" }} />


            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <img src={CloseButton} width={20} height={20} className={styles.closeButton} onClick={toggleMobileMenu} />
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </>




    );
}

export default NavBar;