// IMPORT DO CSS
import "./style.css"
// IMPORT DOS ICON
import { Icon } from '@iconify/react';
// IMPORT DOS COMPONENTES
import Menu from '../../components/Menu';
import Lista_consulta from "../../components/LinhaConsulta";
// IMPORT DAS IMAGENS
import bolinha_titulo from "../../assets/images/icone_titulo.svg";
import lupa from "../../assets/images/btn_pesquisar.svg";
// IMPORT REACT ROUTER DOM
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";


function Consultas() {

    const [listaConsultaServico, setListaConsultaServico] = useState<any[]>([]);
    const [listaProfissionaisDisponiveis, setListaProfissionaisDisponiveis] = useState<any[]>([]);
    const [listaFiltrada, setListaFiltrada] = useState<any[]>([]);

    function filtrarListas() {
        listaConsultaServico.forEach(element => {
            setListaFiltrada(listaProfissionaisDisponiveis.filter(item => item.usuario.nome_usuario != element.profissional.usuario.nome_usuario));
        });             
    };

    function listarProfissionaisDisponiveis() {
        api.get("profissional")
            .then((response: any) => {
                console.log(response);
                setListaProfissionaisDisponiveis(response.data);
            })
            .catch((error: any) => {
                console.log(error);
                alert("Falha ao listar")
            })
    };

    function listarConsultaServico() {
        api.get("profissionalSquads")
            .then((response: any) => {
                console.log(response);
                setListaConsultaServico(response.data);
            })
            .catch((error: any) => {
                console.log(error);
                alert("Falha ao listar")
            })
    };

    useEffect(() => {
        listarConsultaServico();
        listarProfissionaisDisponiveis();
        filtrarListas();
    }, [])

    return (
        <main id="consulta" className="container_consulta">
            <Menu></Menu>
            <section className="section_pesquisa">
                <div className="container">
                    <div className="conteudo">
                        <div className="section_titulo">
                            <img src={bolinha_titulo} alt="" />
                            <h1>Consultas</h1>
                        </div>

                        <div className="pesquisa_and_filtro">

                            <div className="section_ID_Consultar">
                                <div className="input_nome">
                                    <label htmlFor="Pesquisa">Pesquisa</label>
                                    <div className="input-icons">
                                        <input name="Pesquisa" className="input-field" type="text" placeholder="Digite o nome do chamado ou ID" required />
                                    </div>
                                </div>
                                <Link to={"#"} className="section_pesquisa_btn">
                                    <img src={lupa} alt="" />
                                </Link>
                            </div>

                            <div className="pesquisa_tipo select-wrapper">
                                <label htmlFor="filtro" className="filtro">Tipo</label>
                                <select name="Pesquisa">
                                    <option value="projeto" className="input-field">Projeto</option>
                                    <option value="demanda" className="input-field">Demanda</option>
                                    <option value="demanda" className="input-field" >Chamado</option>
                                    <option value="disponivel" className="input-field">Disponível</option>
                                </select>
                            </div>

                        </div>

                        <section className="section_table ">
                            <h2>Consultas</h2>

                            <div className="tabela_scroll">
                                <table>
                                    <tbody>
                                        <thead>
                                            <tr className="linha_titulo">
                                                <th className="  linha_consultas_nome_profissional">Profissional</th>
                                                <th className=" linha_consultas_nome_projeto">Serviço</th>
                                                <th className=" linha_consultas_tipo">Tipo</th>
                                                <th className="linha_consultas_status ">Status</th>
                                            </tr>
                                        </thead>

                                        {
                                            listaConsultaServico.map((consulta: any) => {
                                                console.log(consulta.profissional.usuario.nome_usuario);

                                                return <tr key={consulta.id}>
                                                    <Lista_consulta
                                                        nome_profissional={consulta.profissional.usuario.nome_usuario}
                                                        nome_projeto={consulta.id_squads.id_servicos.nomeServicos}
                                                        tipo={consulta.id_squads.id_servicos.tipoServicos}
                                                        status={consulta.id_squads.id_servicos.statusServicos}
                                                    />
                                                </tr>
                                            })


                                        }

                                        {
                                            listaFiltrada.map((consulta: any) => {
                                                return <tr key={consulta.id}>
                                                    <Lista_consulta
                                                        nome_profissional={consulta.usuario.nome_usuario}
                                                    />
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Consultas;