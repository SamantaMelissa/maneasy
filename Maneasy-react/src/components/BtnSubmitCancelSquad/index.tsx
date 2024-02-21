import "./style.css"
import btn_squad from "../../assets/images/btn_squad.svg";
import btn_confirmar from "../../assets/images/btn_confirmar.svg";
import btn_cancelar from "../../assets/images/btn_cancelar.svg";
import { Link } from "react-router-dom";

function BtnSubmitCancelSquad() {
    return (
        <main id="demanda_cadastro">
            <div className="footer-options">
                <Link to={"/pagina/squad/cadastro"}>
                    <img src={btn_squad} alt="" />
                </Link>
                <div>
                    <Link to={"#"}>
                        <img src={btn_confirmar} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={btn_cancelar} alt="" />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default BtnSubmitCancelSquad;
