//estilo
import "./style.css"

//imagens
import iconeTitulo from "./../../assets/images/icone_titulo.svg"

//rotas
import Menu from '../../components/Menu'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import BtnSubmitCancelSquad from "../../components/BtnSubmitCancelSquad"

function DemandaAtualizar() {
    return (
        <main id="demanda_atualizar">
            <Menu />
            <section>
                <div className="container-grid">
                    <div className="conteudo">
                        <div className="cadastrar">
                            <img src={iconeTitulo} alt="" />
                            <h1>Serviços</h1>
                        </div>
                        <nav className="buttons-grid">
                            <Link to={"/pagina/servico/cadastro"} className="button-cadastrar">Cadastrar</Link>
                            <Link to={"/pagina/servico/consulta"} className="button-consultar">Consultar</Link>
                        </nav>
                        <form>
                            <div className="demanda">
                                <span>Nome</span>
                                <div className="demanda-cadastrar input-icons" >
                                    <Icon className="icon" icon="mdi:clipboard-edit-outline"></Icon>
                                    <input className="input-field" name="nome-demanda" type="text" placeholder="Digite o nome da demanda" required />
                                </div>
                            </div>
                            <div className="datas">
                                <div className="criacao">
                                    <span>Criação</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="bx:calendar"></Icon>
                                        <input className="input-field" name="criacao" type="date" required />
                                    </div>
                                </div>

                                <div className="inicio">
                                    <span>Ínicio</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="bx:calendar"></Icon>
                                        <input className="input-field" name="criacao" type="date" required />
                                    </div>
                                </div>

                                <div className="termino">
                                    <span>Término</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="bx:calendar"></Icon>
                                        <input className="input-field" name="criacao" type="date" required />
                                    </div>
                                </div>
                            </div>
                            <div className="objetivo-demanda">
                                <div className="objetivo-demanda">
                                    <span>Objetivo</span>
                                    <textarea className="objetivo-form" spellCheck="false" name="" id="" cols={30} rows={10}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in qui ex provident minima repellendus nostrum odio quos ut asperiores repudiandae placeat distinctio, maiores corrupti ullam fuga nam optio.</textarea>
                                </div>
                                <div id="barra-rolamento"></div>
                            </div>

                            <div className="progresso-demanda">
                                <div className="orcamento-demanda">
                                    <span>Orçamento</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="fa:dollar"></Icon>
                                        <input className="input-field" name="criacao" type="text" placeholder="Digite o orçamento de demanda" required />
                                    </div>
                                </div>

                                <div className="tempo-demanda">
                                    <span>Tempo do Serviço</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="ps:clock"></Icon>
                                        <input className="input-field" name="criacao" type="text" placeholder="Digite o tempo de demanda" required />
                                    </div>
                                </div>

                                <div className="select_status">
                                    <span>Status</span>
                                    <div className="select-icons">
                                        <Icon className="icon_confirmar" icon="el:ok-sign"></Icon>
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
    );
}
export default DemandaAtualizar;