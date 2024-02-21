// estilição
import "./style.css";
import { Icon } from "@iconify/react";
import Menu from "../../components/Menu";
import Bolinha from "../../assets/images/icone_titulo.svg"
import Pesquisar from "../../assets/images/btn_pesquisar.svg"


//rotas
import { Link } from "react-router-dom";
import LinhaChamado from "../../components/LinhaChamado";

function ChamadoConsulta() {
    const listaChamados: any = [
        {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            nome: "Atualização do Cadastro para MySQL"
        },
    ]

    return (
        <main id="chamado_consulta">
            <Menu />
            <section>
                <div className="container">
                    <div className="section_titulo">
                        <img src={Bolinha} alt="" />
                        <h1>Chamados</h1>
                    </div>
                    <div className="consulta">
                        <Link className="button-cadastrar" to={"/pagina/chamado/cadastro"}>Cadastrar</Link>
                        <Link className="button-consultar" to={""}>Consultar</Link>
                    </div>
                    <div className="pesquisas">

                        <div className="input_nome">
                            <label htmlFor="Pesquisa">Pesquisa</label>
                            <div className="input-icons">
                                <input name="Pesquisa" className="input-field" type="text" placeholder="Digite o nome do chamado ou ID" required/>
                            </div>
                        </div>
                        <div>
                            <Link className="section_consulta_chamado_btn" to={""}>
                                <img src={Pesquisar} alt="" />
                            </Link>
                        </div>
                    </div>
                    <section className="section_table">
                        <h2>Lista de Projetos</h2>
                        <div className="tabela_scroll">
                            <table>
                                <tbody>
                                    {
                                        listaChamados.map((chamado: any) => {
                                            return <tr key={chamado.id}>
                                                <LinhaChamado
                                                    id = {chamado.id}
                                                    nome = {chamado.nome}
                                                />
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </section>
        </main>

    )


}

export default ChamadoConsulta;