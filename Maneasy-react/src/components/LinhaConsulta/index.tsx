import './style.css'
// IMPORT DE IMAGEM
import impressora from "../../assets/images/btn_impressora.svg";
import { Link } from 'react-router-dom';

function Lista_consulta(props: any) {

    return (
        <tr id="consulta" className='consulta_lista'>
            <td data-cell="profissional" className="linha_consultas_nome_profissional">{props.nome_profissional}</td>
            <td data-cell="serviço" className="linha_consultas_nome_projeto">{props.nome_projeto}</td>
            <td data-cell="tipo" className="linha_consultas_tipo">{props.tipo}</td>
            <td data-cell="status" className="linha_consultas_status">{props.status}</td>
        </tr>
    );

}

export default Lista_consulta;