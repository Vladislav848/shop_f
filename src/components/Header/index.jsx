import React, { useState } from "react";
import styles from "./Header.module.scss"
import { FcIdea } from "react-icons/fc";
import { GrBasket } from "react-icons/gr";
import { FaCarTunnel } from "react-icons/fa6";
import Orders from "../Orders";

export default function Header(props) {
    let [cardOpen, setCardOpen]=useState(false);
    
    const showOrders=(props)=> {
        let summa=0;

        props.orders.forEach(el=>summa+=Number.parseFloat(el.price))
        return(
            <>
                {props.orders.map(el=>(
                    <Orders key={el.id} item={el} onDelete={props.onDelete}/>
                ))}
                <p className={styles.summa}>Итого: {new Intl.NumberFormat().format(summa)} ₽</p>
            </>
        );
    }

    const showNothing=()=> {
        return(
            <div className={styles.empty}>
                <h2>Товары отсутсвуют в корзине</h2>
            </div>
        );
    }

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
                    {props.orders.length>0 ? showOrders(props) : showNothing()}
                </div>
            )}
            <div className={styles.presentation}></div>
        </header>
    );
}