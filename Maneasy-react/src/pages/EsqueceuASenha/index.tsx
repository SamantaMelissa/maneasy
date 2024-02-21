//estilização
import "./style.css"
import { Icon } from "@iconify/react";
import entrar_logo from "../../assets/images/logo_colorida.svg";

//hooks
import { Link } from "react-router-dom";

function EsqueceuASenha() {
  return (
    <main id="tela_esqueceu_senha">
      <Link to={"/"} className="link_btn_voltar">
        <Icon className="btn_voltar" icon="clarity:circle-arrow-solid" />
      </Link>
      <section className="section_img_logo">
        <img src={entrar_logo} alt="Logo Maneasy" />
      </section>
      <section className="section_conteudo">
        <h2>
          Esqueceu
          <span>sua senha?</span>
        </h2>

        <form className="section_input">
          <div className="section_cadastro div_chapa">
            <label htmlFor="Chapa">Chapa</label>
            <div className="input_icons">
              <Icon className="icon" icon="ic:outline-badge" />
              <input
                name="Chapa"
                className="input_field"
                type="text"
                placeholder="Digite sua chapa"
                // onChange={(e) => setChapa(e.target.value)}
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
                // onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="div_btn_confirmar">
            <Link className="link_btn_confirmar" to={"/"}>
              <button className="btn_confimar" type="submit">Confirmar</button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
export default EsqueceuASenha; 