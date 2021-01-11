import React from 'react';
import shop from './Shop.module.css';


const Shop = () => {
    return (
        <div className={shop.shop}>
            <h2>Магазины</h2>
            <h5><a href='https://spinningline.ru' target="_blank"><img className={shop.spinningline}
                                                       src='https://sun9-75.userapi.com/c853424/v853424826/1a9aca/rx0Iwm0wSCo.jpg'/></a>
            </h5>
            <h5><a href='https://aliexpress.ru/' target="_blank"><img className={shop.aliExpress}
                                                       src='https://ulpressa.ru/wp-content/uploads/old/14776700062170.png'/></a></h5>
            <h5>Сайт 3</h5>
            <h5>Сайт 4</h5>
            <h5>Сайт 5</h5>
        </div>
    )
}

export default Shop;