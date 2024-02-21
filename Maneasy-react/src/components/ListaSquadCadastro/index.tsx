import "./style.css";
import btn_squad from "../../assets/images/btn_squad.svg";
import { Link } from "react-router-dom";

function ListaSquadCadastros(props: any) {
  return (
    <>
      <table id="squad_atualizar_lista">
        <thead className="lista_consultas">
          <tr className="section_resultado_dados">
            <td className="section_resultado_dados_id">
              {/* Envolve o ID encurtado com a div tooltip */}
              <div className="tooltip">
                {props.id.slice(0, 10)}...
                <span className="tooltip-text">{props.id}</span>
              </div>
            </td>
            <td className="section_resultado_dados_tipo">{props.tipo}</td>
            <td className="section_resultado_dados_nome">{props.nome}</td>
            <td className="section_resultado_dados_acao">
              <Link
                to={"/pagina/squad/cadastro/" + props.id_squad}
                className="section_resultado_dados_btn"
              >
                <img src={btn_squad} alt="Editar Squad" />
              </Link>
            </td>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default ListaSquadCadastros;
