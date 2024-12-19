import React from "react"
import { Link } from "react-router-dom"
import logo from '../../assets/images/ico.ico'

const Header = () => {
    return(
        <header className="header">
            <div className="header_logo">
                {/* ДОБАВИТЬ ПАСХАЛКУ ПРИ НАЖАТИИ НА КАРТИНКУ */}
                <Link to="/"> 
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="header_nav">
                <ul>

                    <li className="headerLi"> <Link to="/students">Ученики</Link> </li>
                    <li className="headerLi"> <Link to="/leads">Лиды</Link> </li>
                    <li className="headerLi"> <Link to="/payment">P&L / оплаты</Link> </li>
                    <li className="headerLi"> <Link to="/groups">Группы</Link> </li>
                    <li className="headerLi"> <Link to="/finance">Финансы</Link> </li>
                    <li className="headerLi"> <Link to="/register">Регистрация</Link> </li>
                    <li className="headerLi"> <Link to="login">Выйти</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header