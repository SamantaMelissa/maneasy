// IMPORT DO CSS
import "./style.css"
// IMPORT DOS ICON
import { Icon } from '@iconify/react';
// IMPORT DE COMPONENTES
import Menu from '../../components/Menu';
import ListaSquadCadastros from "../../components/ListaSquadCadastro";
// IMPORT DAS IMAGENS
import bolinha_titulo from "../../assets/images/icone_titulo.svg";
import lupa from "../../assets/images/btn_pesquisar.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";



function SquadCadastros() {
    // const listaSquadCadastro: any =
    //     [
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //         {
    //             id: 10101010,
    //             tipo: "Projeto",
    //             nome: "Atualização de Cadastro para MySQL"
    //         },
    //     ]
    const [listaConsulta, setListaConsulta] = useState<any[]>([]);

    function listarSquads() {

        api.get("squads")
            .then((response: any) => {
                console.log(response);

                setListaConsulta(response.data);
            })
            .catch((error: any) => {
                console.log(error);
                alert("Falha ao listar");
            })
    };

    useEffect(() => {
        listarSquads();
    }, [])
    return (
        <main id="squad_atualizar">
            <Menu></Menu>
            <section className="container">
                <div className="section_titulo">
                    <img src={bolinha_titulo} alt="" />
                    <h1>Squad</h1>
                </div>
                <div className="section_pesquisa_resultado">
                    <div className="section_pesquisa">
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="Chapa">Chapa</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="ic:outline-badge" />
                                <input name="Chapa" className="input-field" type="number" placeholder="Digite o nome da chapa" />
                            </div>
                        </div>
                        <div className="section_p_ou">
                            <p>ou</p>
                        </div>
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="Consultar">Consultar</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="mingcute:user-4-fill" />
                                <input name="Consultar" className="input-field" type="text" placeholder="Digite o nome do serviço" />
                            </div>
                        </div>
                        <Link to={"#"} className="section_pesquisa_btn">
                            <img src={lupa} alt="" />
                        </Link>
                    </div>
                    <div className="section_resultado">
                        <h2>Lista de Serviços</h2>
                        <div className="tabela_scroll">
                            <table>
                                {
                                    listaConsulta.map((cadastro: any) => {
                                        return <tr key={cadastro.id}>
                                            <ListaSquadCadastros
                                                id={cadastro.id_servicos.id}
                                                id_squad={cadastro.id}
                                                tipo={cadastro.id_servicos.tipoServicos}
                                                nome={cadastro.id_servicos.nomeServicos}
                                            />
                                        </tr>
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );

}

export default SquadCadastros;