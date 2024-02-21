//estilização
import "./style.css"

//rotas
import { Link } from "react-router-dom";
import Menu from "../../components/Menu"
import BtnSubmitCancelSquad from "../../components/BtnSubmitCancelSquad";

//imagens
import Bolinha from "../../assets/images/icone_titulo.svg"
import { Icon } from '@iconify/react';


function DemandaCadastro() {
    return (

        <main id="demanda_cadastro" className="main_cadastro">
            <Menu />
            <section className="section-width">
                <div className="container-grid">
                    <div className="conteudo">
                        <div className="section_titulo">
                            <img src={Bolinha} alt="" />
                            <h1>Serviços</h1>
                        </div>
                        <nav className="buttons-grid">
                            <Link className="button-cadastrar" to={"#"}>Cadastrar</Link>
                            <Link className="button-consultar" to={"/pagina/servico/consulta"}>Consultar</Link>
                        </nav>
                        <form action="">
                            <div className="demanda">
                                <span>Nome</span>
                                <div className="demanda-cadastrar input-icons">
                                    <Icon className="icon" icon="mdi:clipboard-edit-outline" />
                                    <input className="input-field" name="nome-demanda" type="text" placeholder="Digite o nome do serviço" required />
                                </div>
                            </div>
                            <div className="datas">
                                <div className="criacao">
                                    <span>Criação</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="bx:calendar" />
                                        <input className="input-field" name="criacao" type="date" required />
                                    </div>
                                </div>
                                <div className="inicio">
                                    <span>Ínicio</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="bx:calendar" />
                                        <input className="input-field" name="criacao" type="date" required />
                                    </div>
                                </div>
                                <div className="termino">
                                    <span>Término</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="bx:calendar" />
                                        <input className="input-field" name="criacao" type="date" required />
                                    </div>
                                </div>
                            </div>
                            <div className="objetivo-demanda">
                                <span>Objetivo</span>
            
                                <textarea
                                    className="objetivo-form"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={10}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="progresso-demanda">
                                <div className="orcamento-demanda">
                                    <span>Orçamento</span>
                                    <div className="data-conte">
                                        <Icon className="icon" icon="fa:dollar" />
                                        <input className="input-field" name="orcamento" type="text" placeholder="Digite o orçamento previsto para o serviço" required />
                                    </div>
                                </div>
                                <div className="tempo-demanda">
                                    <span>Tempo do Serviço</span>
                                    <div className="data-conte">
                                        <Icon className="icon" icon="ps:clock" />
                                        <input className="input-field" name="tempo" type="text" placeholder="Digite o tempo que será investido no serviço" required />
                                    </div>
                                </div>

                                <div className="select_status">
                                    <span>Status</span>
                                    <div className="select-icons">
                                        <Icon className="icon_confirmar" icon="el:ok-sign" />
                                        <select className="data-conte" name="status" id="">
                                            <option value="">Aberto</option>
                                            <option value="">Em andamento</option>
                                            <option value="">Finalizado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <BtnSubmitCancelSquad />

                        </form>

                    </div>
                </div>
            </section>
        </main>
    )

}

export default DemandaCadastro