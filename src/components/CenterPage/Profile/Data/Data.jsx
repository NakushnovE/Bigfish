import React from 'react';
import data from './Data.module.css';


const Data = () => {
    return (
    <div className={data.data}>
        <div>
          <h3>Сведения</h3>
        </div>
        <div>
          <p>Дата:</p>
        </div>
        <div>
          <p>Локация:</p>
        </div>
        <div>
          <p>Приманка:</p>
        </div>
        <div>
          <p>Вес:</p>
        </div>
     </div>   
    )
}
export default Data;