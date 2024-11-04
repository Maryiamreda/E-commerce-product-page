import './navBar.module.scss';
import styles from './navBar.module.scss';

import Logo from '../../../public/images/logo.svg';
import Cart from '../../../public/images/icon-cart.svg';
import Avatar from '../../../public/images/image-avatar.png';

const NavBar = () => {
    return (
        <>
            <nav>
                <div style={{ display: "inline-flex" }}>
                    <div style={{ paddingTop: "14px" }}>
                        <img src={Logo} width={140} height={20} />
                    </div>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>

                    </ul></div>
                <div style={{ display: "flex", gap: "25px" }}>
                    <img src={Cart} width={20} height={20} style={{ padding: "13px" }} />
                    <img src={Avatar} width={50} height={50} className={styles.avatar} />
                </div>
            </nav>
            <hr />
        </>




    );
}

export default NavBar;