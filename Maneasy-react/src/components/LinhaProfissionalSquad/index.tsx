//estilização
import { Link } from "react-router-dom";
import btn_confirmar from "../../assets/images/btn_confirmar.svg";
import "./style.css";


function LinhaProfissionalSquad(props: any) {
    return (
        <>
            <div>
                <p className="section_resultado_dados_id">{props.chapa}</p>

                <p className="section_resultado_dados_nome">{props.nome}</p>
            </div>

            <Link to={""} className="section_resultado_dados_btn"><img src={btn_confirmar}
                alt="" />
            </Link>
        </>
    )
}
export default LinhaProfissionalSquad;