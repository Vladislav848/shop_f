import React from "react";
import styles from "./Categories.module.scss"

export default function Categories(props){
    const categories=[
        {
            key:"all",
            name:"Все товары"
        },
        {
            key:"Шкафы",
            name:"Шкафы"
        },
        {
            key:"Унитазы",
            name:"Унитазы"
        },
        {
            key:"Входные двери",
            name:"Входные двери"
        },
        {
            key:"Освещение",
            name:"Освещение"
        },
    ]


    return(
       <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>
                    {el.name}
                </div>
            ))}
       </div>
    );
}