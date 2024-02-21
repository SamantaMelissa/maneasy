//estilização
import { Link } from "react-router-dom";
import btn_editar from "../../assets/images/btn_editar.svg";
import "./style.css";


function LinhaChamado(props: any) {
    return (
        <>
            <td className="c1">{props.id}</td>
            <td className="c2">{props.nome}</td>
            <td className="c3">
                <Link to={"/pagina/chamado/atualizar"}>
                    <img src={btn_editar} />
                </Link>
            </td>
        </>

    )
}
export default LinhaChamado;