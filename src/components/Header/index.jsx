import React, { useState } from "react";
import styles from "./Header.module.scss"
import { FcIdea } from "react-icons/fc";
import { GrBasket } from "react-icons/gr";
import { FaCarTunnel } from "react-icons/fa6";

export default function Header() {
    let [cardOpen, setCardOpen]=useState(false);
    

    return(
        <header>
            <div>
                <FcIdea className={styles.icon} />
                <span className={styles.logo}>IDEA</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <GrBasket onClick={()=>setCardOpen(cardOpen=!cardOpen)} className={`${styles.shopCartButton} ${cardOpen ? styles.active : ''}`}/>
            </div>

            {cardOpen && (
                <div className={styles.shopCard}>

                </div>
            )}
            <div className={styles.presentation}></div>
        </header>
    );
}