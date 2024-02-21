//estilização
import "./style.css"

//rotas
import { Link } from "react-router-dom";
import Menu from "../../components/Menu"

//imagens
import bolinha_azul from "../../assets/images/bolinha_azul.svg"

import { Icon } from '@iconify/react';

//Hook
import { useState } from "react";


function ProfissionalCadastro() {

  const [techs, setTechs] = useState<string[]>(
    [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "JAVA"
    ]
  );

  const [select, setSelect] = useState<string>("");

  const [skillsSelecionadas, setSkillsSelecionadas] = useState<string[]>([]);

  function adicionarSkill(entry: string[]) {

    console.log(entry);

    if (entry.length === 0) {

      alert("Selecione uma skill para adicionar");
    } else {

      if (skillsSelecionadas.includes(entry.toString())) {

        alert("Essa skill já foi selecionada");
      }
      else {

        let novaLista = skillsSelecionadas

        novaLista = novaLista.concat(entry)

        setSkillsSelecionadas(novaLista)
      }
    }
  }

  function adicionar(entry: string[]) {
    let novaLista = skillsSelecionadas

    novaLista = novaLista.concat(entry)

    setSkillsSelecionadas(novaLista)
  }

  function excluirSkill(skill: string) {

    const novaListaSkillsSelecionadas = skillsSelecionadas.filter(item => item !== skill);

    setSkillsSelecionadas(novaListaSkillsSelecionadas);
  };

  return (

    <main id="profissional_cadastro" className="main_profissional_cadastro">
      <Menu></Menu>
      <section className="conteudo_princiapal">
        <div className="container_grid">
          <div className="section_titulo">
            <img src={bolinha_azul} alt="circulo azul" />
            <h1>Profissionais</h1>
          </div>
          <form className="conteudo">
            <nav className="nav_cad_cons">
              <Link to={""} className="btn_cad" >
                Cadastrar
              </Link>
              <Link to={"/pagina/profissional/consulta"} className="btn_cons">
                Consultar
              </Link>
            </nav>
            <div className="posicao_conteudo">
              <div>
                <label htmlFor="Chapa">Chapa</label>
                <div className="input-icons">
                  <Icon className="icon" icon="ic:outline-badge" />
                  <input
                    name="Chapa"
                    className="input_chapa input-field"
                    type="text"
                    placeholder="Digite o número da chapa"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="e-mail">Nome</label>
                <div className="input-icons">
                  <Icon className="icon" icon="mingcute:user-4-fill" />
                  <input
                    name="Consultar"
                    className="input_nome input-field"
                    type="text"
                    placeholder="Digite o nome"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="posicao_conteudo">
              <div>
                <label htmlFor="status">Status</label>
                <div className="input-icons">
                  <label htmlFor="status">
                    <Icon className="icon" icon="bi:exclamation-circle" />
                  </label>
                  <select
                    className="input-field input_status"
                    name="status"
                    id="status"
                    required
                  >
                    <option value="" >
                      Ativo
                    </option>
                    <option value="">Inativo</option>
                    <option value="">Férias</option>
                    <option value="">Afastado</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="e-mail">E-mail</label>
                <div className="input-icons">
                  <Icon className="icon" icon="ic:round-email" />
                  <input
                    name="e-mail"
                    id="e-mail"
                    className="input-field input_email"
                    type="email"
                    placeholder="Digite o e-mail"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="posicao_conteudo">
              <div>
                <label htmlFor="ini_ferias">Inicio das férias</label>
                <div className="input-icons input_date">
                  <Icon className="icon" icon="bx:calendar" />
                  <input
                    name="ini_ferias"
                    id="ini_ferias"
                    className="input_ini_ferias input-field"
                    type="date"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="fim_ferias">Término das férias</label>
                <div className="input-icons input_date">
                  <Icon className="icon" icon="bx:calendar" />
                  <input
                    name="fim_ferias"
                    id="fim_ferias"
                    className="input_fim_ferias input-field"
                    type="date"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="hard_skills">
              <div className="section_objetivo_projeto">
                <select
                  name=""
                  id="cad_select_skill"
                  onChange={(e) => { adicionarSkill(e.target.value.split(" ")) }
                  }
                  defaultValue={select}
                >
                  <option disabled value="">Selecione</option>
                  {
                    techs.map((tech: any, index: number) => {
                      return <option
                        key={index}
                        value={tech}
                      >
                        {tech}
                      </option>
                    })
                  }
                </select>
              </div>
              <hr />
              <div id="cad_lista_skills" className="cad_skills">
                {
                  skillsSelecionadas.length > 0 ? skillsSelecionadas.map((el: any, index: number) => {
                    console.log(skillsSelecionadas);

                    return (<div key={index} className="cad_item_skill" >
                      <span className="cad_span_skill">{el}</span>
                      <button
                        type="button"
                        id="cad_item_excluir"
                        onClick={() => excluirSkill(el)}
                        className="cad_item_excluir">
                        <svg xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 384 512">
                          <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                      </button>
                    </div>)
                  }) : <span className="cad_span_skill">Nenhuma skill cadastrada</span>
                }
              </div>
            </div>
            <div className="posicao_conteudo">
              <div className="horas">
                <div>
                  <label htmlFor="jorn_tra">Jornada de trabalho</label>
                  <div className="input-icons">
                    <Icon className="icon" icon="ps:clock" />
                    <input
                      name="jorn_tra"
                      id="jorn_tra"
                      className="input_jorn_tra input-field"
                      type="number"
                      placeholder="Digite a jornada de trabalho"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="hora_ext">Horas extras</label>
                  <div className="input-icons">
                    <Icon className="icon" icon="ps:clock" />
                    <input
                      name="hora_ext"
                      id="hora_ext"
                      className="input_hora_ext input-field"
                      type="number"
                      placeholder="Digite o total de horas extras"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="btn_conf">
                <button className="btn_conf_e_canc btn_conf">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="48.7805"
                      height="48.7805"
                      rx="24.3902"
                      fill="#50B747"
                    />
                    <path
                      d="M21.1978 34.2075L12.8645 25.8785L15.7812 22.9634L21.1978 28.3772L34.9478 14.6344L37.8645 17.5495L21.1978 34.2075Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="btn_conf_e_canc btn_canc">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 51 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      x="0.975586"
                      width={50}
                      height={50}
                      rx={25}
                      fill="#C25348"
                    />
                    <rect
                      x={12}
                      y={12}
                      width={27}
                      height={27}
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_157_758"
                          transform="scale(0.0111111)"
                        />
                      </pattern>
                      <image
                        id="image0_157_758"
                        width={90}
                        height={90}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB40lEQVR4nO2cS2rDQBBEtYpz8ijnyWLQhfK5RRmBDAaHENszPVXd9UDglal+SK0RGvWyGGOMMcYYY4wxxpgbAJwAvAP4Po7990lFFRTyA3gB8IFbNgCvCzkS+f8IyRdWNf8/QvKEVc1/R0hK2RL5HwhJJVsi/3F3bnicNvNuLpP/WPY8S5shu4PkC2tE2H2N2YMtso080S5+40dJdJjszpJ3PpeA0Cv60ka2kY7t4pq3UXlHB28jZCtljboUu7cRhYzyhYA4W5qCQJipC0yFgSjLEBgKBEGGEGYWiiqSZxaMapJnFI6qkiMFoLrkCBGw5LBH4DbgP7neeN/LoLOvdrsQlL2lkUwse0snmVB2XslEsvNLJpBdR/JE2fUkT5BdV3KgbEsOkG3J11h0AHDrSCH5Qt0WAi/vUkqud2bDj+AlJOc/s8EjOa9s8EnOJ5tYch7ZfjkbgLcbBOANNAF4S1gA3uQYgLftBsCwFw4EGYbCVCCIsnSFsTAQZnoK5oJAnC1dIRDImOazXwhlHTWvQ/2je6l5HcpjJKTmdWzCg1Fk5nU08VE/EvM6modXZRpnliW/xIC+LPklRk5myS8xRDVLfomxwFnyH6uRfen3dRyr0me/EM9vjDHGGGOMMcYYswRyBpias+umnbidAAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section >
    </main >

  )
}

export default ProfissionalCadastro;