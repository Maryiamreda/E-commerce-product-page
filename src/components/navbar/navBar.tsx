import './navBar.module.scss';
import styles from './navBar.module.scss';

import Logo from '../../../public/images/logo.svg';
import Cart from '../../../public/images/icon-cart.svg';
import Avatar from '../../../public/images/image-avatar.png';
import Menu from '../../../public/images/icon-menu.svg';
import CloseButton from '../../../public/images/icon-close.svg';
import useCounterHook from '../product/sneakerCard'
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
// import { useCart } from '../../context/CartContext';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const cartContext = useContext(CartContext);
    if (!cartContext) throw new Error("Navbar must be used within a CartProvider");

    const { count } = cartContext;

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
                        <img src={Cart} width={20} height={20} className={styles.cartIcon} />

                        {count > 0 && <div className={styles.count}>{count}</div>}
                    </div>
                    <img src={Avatar} width={50} height={50} className={styles.avatar} />
                </div>
            </nav>
            <hr />
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