import Menu from "../../components/Menu";
import "./style.css";

import bolinha_titulo from "../../assets/images/icone_titulo.svg";

function Dashboard() {

    return (

        <main id="containerDashboard">

            <Menu></Menu>

            <section className="container_dashboard">
                <div id="dashboard">
                    <div className="section_titulo">
                        <img src={bolinha_titulo} />
                        <h1>Dashboard</h1>
                    </div>
                    <section  >
                        <div className="section_geral">
                            <div className="section_status_profissional">
                                <h2 className="titulo_dashboard">Status do Profissional</h2>
                                <div className="grafico_legenda">
                                    <div className="teste">
                                        <div className="circulo01 circulo">
                                            <div className="circulo02 circulo">
                                                <div className="circulo03 circulo">
                                                    <div className="circulo04 circulo">
                                                        <div className="circulo05 circulo">
                                                            <div className="circulo06 circulo" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="legenda">
                                            <div className="confirguracao_geral">
                                                <div className="indicador01 indicador"> </div>
                                                <p>40% em projetos</p>
                                            </div>
                                            <div className="confirguracao_geral">
                                                <div className="indicador02 indicador"> </div>
                                                <p>25% em demandas</p>
                                            </div>
                                            <div className="confirguracao_geral">
                                                <div className="indicador03 indicador"> </div>
                                                <p>23% em disponíveis</p>
                                            </div>
                                            <div className="confirguracao_geral">
                                                <div className="indicador04 indicador"> </div>
                                                <p>08% em afastamento</p>
                                            </div>
                                            <div className="confirguracao_geral">
                                                <div className="indicador05 indicador"> </div>
                                                <p>04% em férias</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hard_skill_profissionais">
                                <h2 className="titulo_dashboard">Hard Skill x Profissionais</h2>
                                <div>
                                    <div className="indicador_hard_skill">
                                        <p>100</p>
                                        <p>75</p>
                                        <p>50</p>
                                        <p>25</p>
                                        <p>0</p>
                                    </div>
                                    <div className="barras">
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_01 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>Java</p>
                                            </div>
                                        </div>
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_02 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>Python</p>
                                            </div>
                                        </div>
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_03 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>Ruby</p>
                                            </div>
                                        </div>
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_04 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>C#</p>
                                            </div>
                                        </div>
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_05 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>Kotlin</p>
                                            </div>
                                        </div>
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_06 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>HTML</p>
                                            </div>
                                        </div>
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_07 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>CSS</p>
                                            </div>
                                        </div>
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_08 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>React</p>
                                            </div>
                                        </div>
                                        <div className="container_barras">
                                            <div className="barra_externa">
                                                <div className="barra_09 barra_interna" />
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>MySQL</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section_geral">
                            <div className="andamento_projeto">
                                <h2 className="titulo_dashboard">Andamento dos Projetos</h2>
                                <div className="container_andamento_projeto">
                                    <div>
                                        <div>
                                            <h3>Atualização do Cadastro para MySQL</h3>
                                        </div>
                                        <div className="barra_externa_andamento_projeto">
                                            <div className="barra_interna_andamento_projeto_01" />
                                        </div>
                                        <div className="status">
                                            <div>
                                                <p className="destaque_status">
                                                    Status: <span className="span_status">Em andamento</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p>354 / 680</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h3>Implementação do onboarding</h3>
                                        </div>
                                        <div className="barra_externa_andamento_projeto">
                                            <div className="barra_interna_andamento_projeto_02" />
                                        </div>
                                        <div className="status">
                                            <div>
                                                <p className="destaque_status">
                                                    Status: <span className="span_status">Em andamento</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p>55 / 680</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h3>Criação do novo sistema de gerenciamento</h3>
                                        </div>
                                        <div className="barra_externa_andamento_projeto">
                                            <div className="barra_interna_andamento_projeto_03" />
                                        </div>
                                        <div className="status">
                                            <div>
                                                <p className="destaque_status">
                                                    Status: <span className="span_status">Em andamento</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p>600 / 680</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h3>Atualização do Cadastro para MySQL</h3>
                                        </div>
                                        <div className="barra_externa_andamento_projeto">
                                            <div className="barra_interna_andamento_projeto_04" />
                                        </div>
                                        <div className="status">
                                            <div>
                                                <p className="destaque_status">
                                                    Status: <span className="span_status">Em andamento</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p>560 / 680</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grafico_demanda_chamado">
                                <h2 className="titulo_dashboard">Demandas x Chamados x Finalizados</h2>
                                <div>
                                    <div className="indicador_hard_skill">
                                        <p>100</p>
                                        <p>75</p>
                                        <p>50</p>
                                        <p>25</p>
                                        <p>0</p>
                                    </div>
                                    <div className="barras">
                                        <div className="container_barras_demanda_chamado">
                                            <div className="demanda_chamado">
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_demanda01" />
                                                </div>
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_chamado01" />
                                                </div>
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>FEV</p>
                                            </div>
                                        </div>
                                        <div className="container_barras_demanda_chamado">
                                            <div className="demanda_chamado">
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_demanda02" />
                                                </div>
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_chamado02" />
                                                </div>
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>MAR</p>
                                            </div>
                                        </div>
                                        <div className="container_barras_demanda_chamado">
                                            <div className="demanda_chamado">
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_demanda03" />
                                                </div>
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_chamado03" />
                                                </div>
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>ABR</p>
                                            </div>
                                        </div>
                                        <div className="container_barras_demanda_chamado">
                                            <div className="demanda_chamado">
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_demanda04" />
                                                </div>
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_chamado04" />
                                                </div>
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>JUN</p>
                                            </div>
                                        </div>
                                        <div className="container_barras_demanda_chamado">
                                            <div className="demanda_chamado">
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_demanda05" />
                                                </div>
                                                <div className="barra_externa_demanda_chamado">
                                                    <div className="barra_chamado05" />
                                                </div>
                                            </div>
                                            <div className="descricao_hard_skill">
                                                <p>JUL</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="legenda_demanda_chamado">
                                    <div className="confirguracao_geral">
                                        <div className="legenda_demanda_chamado01 indicador"> </div>
                                        <p>Demandas</p>
                                    </div>
                                    <div className="confirguracao_geral">
                                        <div className="legenda_demanda_chamado02 indicador"> </div>
                                        <p>Chamados</p>
                                    </div>
                                    <div className="confirguracao_geral">
                                        <div className="legenda_demanda_chamado03 indicador"> </div>
                                        <p>Finalizados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>

        </main>
    )



}

export default Dashboard;