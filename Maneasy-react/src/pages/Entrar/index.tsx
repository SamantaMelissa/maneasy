import { Icon } from "@iconify/react";
import "./style.css";
import "../../index.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import entrar_logo from "../../assets/images/logo_colorida.svg";

function Entrar() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return (
    <main id="entrar">
      <section className="section_img_logo">
        <img src={entrar_logo} alt="Logo Maneasy"/>
      </section>
      <section className="section_conteudo">
        <h2>
          Bem-<span>vindo</span>
        </h2>
        <form className="section_input">
          <div className="div_email">
            <label htmlFor="Email">E-mail</label>
            <div className="input_icons">
              <Icon className="icon" icon="mingcute:user-4-fill" />
              <input
                name="Email"
                className="input_field"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="Senha">Senha</label>
            <div className="input_icons">
              <Icon className="icon" icon="mdi:password" />
              <input
                name="Senha"
                className="input_field"
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="div_esqueceu_senha">
            <Link className=" link_esqueceu_senha" to={"/pagina/esqueceu/senha"}>
              <p>Esqueceu sua senha?</p>
            </Link>
          </div>
          <div className="div_btn_confirmar">
            <Link className="link_btn_confirmar" to={"/pagina/dashboard"}>
              <button className="btn_confimar" type="submit">Confirmar</button>
            </Link>
          </div>
          <div className="div_cadastro">
            <Link to={"/pagina/cadastro"} className="link_cadastro">
              <p>
                Ainda não tem uma conta?
                <br />
                Cadastre-se
              </p>
            </Link>
          </div>
        </form>
      </section>
    </main>
  )

}

export default Entrar;