/* Importar css do componente Menu */
import "./style.css";
import "../../index.css";

import { Icon } from '@iconify/react';
import logo_branca from "../../assets/images/logo_branca.svg";
import { Link } from "react-router-dom"


function Menu() {


    return (
        <>
            <input id="checkbox_menu" type="checkbox"/>
            <label id="menu_hamburguer" htmlFor="checkbox_menu">
                    <span></span>
                    <span></span>
                    <span></span>
            </label>
            <aside id="aside_menu">
                <img className="logo" src={logo_branca} alt="Logo Maneasy" />
                <nav className="nav_btn_menu">
                    <Link to={"/pagina/dashboard"}>
                        <div className="icon_menu">
                            <Icon icon="ph:chart-bar-bold" />
                        </div>
                        Dashboard
                    </Link>
                    <Link to={"/pagina/profissional/cadastro"}>
                        <div className="icon_menu">
                            <Icon icon="ion:people-circle" />
                        </div>
                        Profissionais
                    </Link>
                    <Link to={"/pagina/servico/cadastro"}>
                        <div className="icon_menu">
                            <Icon icon="la:project-diagram" />
                        </div>
                        Serviços
                    </Link>
                    <Link to={"/pagina/chamado/cadastro"}>
                        <div className="icon_menu">
                            <Icon icon="mdi:bell-alert-outline" />
                        </div>
                        Chamados
                    </Link>
                    <Link to={"/pagina/squad/consulta"}>
                        <div className="icon_menu">
                            <Icon icon="mdi:people-group" />
                        </div>
                        Squad
                    </Link>
                    <Link to={"/pagina/consultas"}>
                        <div className="icon_menu">
                            <Icon icon="mdi:file-report-outline" />
                        </div>
                        Consultas
                    </Link>
                </nav>
                <Link className="link_footer" to={"/"}>
                    <footer id="footer_menu">
                        <div className="icon_footer">
                            <Icon icon="iconamoon:exit-bold" />
                        </div>
                        Sair
                    </footer>
                </Link>
            </aside>
        </>
    )
}
export default Menu;