//estilização
import "./style.css"

//Hoots
import { Link } from "react-router-dom"

// IMPORTE DE IMAGENS
import IconTitulo from "../../assets/images/icone_titulo.svg";
import IconLupa from "../../assets/images/btn_pesquisar.svg";

// Import component:
import { Icon } from '@iconify/react';
import BtnSubmitCancelSquad from "../../components/BtnSubmitCancelSquad";
import Menu from "../../components/Menu";

function ChamadoAtualizar() {

    return (
        <main id="chamado_atualizar">
            <Menu/>
            <section>
                <div className="container-grid">
                    <div className="conteudo">
                        <div className="cadastrar">
                            <img src={IconTitulo} alt=""/>
                                <h1>Chamados</h1>
                        </div>
                        <div className="buttons-grid">
                            <Link to="/pagina/chamado/cadastro" className="button-cadastrar">Cadastrar</Link>
                            <Link to="/pagina/chamado/consulta" className="button-consultar">Consultar</Link>
                        </div>

                        <div className="chamados">
                            <span>Nº do Chamado</span>
                            <div className="num-chamados input-icons">
                                <Icon className="icon" icon="mdi:bell-alert-outline"></Icon>
                                <input className="input-field" name="numero-chamados" type="text" required placeholder="Digite o número do chamado"/>
                                    <img className="lupa" src={IconLupa} alt=""/>
                                    </div>
                            </div>

                            <div className="info-grid">
                                <div className="solicitante">
                                    <span className="text-span">Nome do Solicitante</span>
                                    <div className="input-icons">
                                        <Icon className="icon_solicitante_profissional" icon="mingcute:user-4-fill"></Icon>
                                        <input className="input-field" name="Solicitante" type="text" required placeholder="Digite o nome do solicitante"/>
                                    </div>
                                </div>

                                <div className="profissional">
                                    <span className="text-span">Nome do Profissional</span>
                                    <div className="input-icons">
                                        <Icon className="icon_solicitante_profissional" icon="mingcute:user-4-fill"></Icon>
                                        <input className="input-field" name="Nome" type="text" required placeholder="Digite o nome do profissional"/>
                                    </div>
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
                                        <input className="input-field" name="criacao" type="date" required/>
                                    </div>
                                </div>

                                <div className="termino">
                                    <span>Término</span>
                                    <div className="data-conte input-icons">
                                        <Icon className="icon" icon="bx:calendar"></Icon>
                                        <input className="input-field" name="criacao" type="date" required/>
                                    </div>
                                </div>
                            </div>

                            <div className="chamado-info">
                                <span>Descrição do Chamado</span>
                                <textarea className="chamado-form" spellCheck="false" name="" id="" rows={5}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in qui ex provident minima repellendus nostrum odio quos ut asperiores repudiandae placeat distinctio, maiores corrupti ullam fuga nam optio.</textarea>
                            </div>

                            <div className="chamado-info">
                                <span>Observações do Chamado</span>
                                <textarea className="chamado-form" spellCheck="false" name="" id="" rows={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, cupiditate. Quo iste magnam nostrum adipisci! Odit suscipit sit laudantium. Perspiciatis rem, deleniti quas libero ipsa officiis corporis laboriosam temporibus quo.</textarea>
                            </div>
                            <BtnSubmitCancelSquad/>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default ChamadoAtualizar;