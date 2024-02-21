import './style.css'
import imagemEditar from "../../assets/images/btn_editar.svg"
import { Link } from "react-router-dom";


function Demanda_consulta_status(props: any) {
    return (
        <>
            <td className="c1 fontes">{props.id}</td>
            <td className="c2 fontes">{props.descricao}</td>
            <td className="c3 fontes">
                <Link to={"/pagina/servico/atualizar"}>
                    <img src={imagemEditar} />
                </Link>
            </td>
        </>
    )
}

export default Demanda_consulta_status;