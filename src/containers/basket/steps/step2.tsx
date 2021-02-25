import React from 'react';

import style from './style.css';

function Basket({ nextStep }) {
    return (
        <div className={style.basket}>
            <h1>Оформление заказа</h1>
            <form className={style.formReg}>
                <div className={style.labelInfo}>
                    <label>Введите имя</label>
                    <input className={style.uiInput} />
                </div>
                <div className={style.labelInfo}>
                    <label>Введите Фамилию</label>
                    <input className={style.uiInput} />
                </div>
                <div className={style.labelInfo}>
                    <label>Введите город</label>
                    <input className={style.uiInput} />
                </div>
                <div className={style.labelInfo}>
                    <label>Введите почтовый индекс</label>
                    <input className={style.uiInput} />
                </div>
            </form>
            <div className={style.decision}>
                <button onClick={() => nextStep()} className={style.confirm}>
                    Заказать
                </button>
            </div>
        </div>
    );
}

export default Basket;
