import "./style.css";
import { Icon } from '@iconify/react';
import entrar_logo from "../../assets/images/logo_colorida.svg";

//hooks
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Cadastro() {
    const [chapa, setChapa] = useState<string>("");
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confirmarSenha, setConfirmarSenha] = useState<string>("");

    const VerificarSenha = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (senha === confirmarSenha) {
            alert("As duas senhas se coincidem!");
        } else {
            alert("As duas senhas não se coincidem!");
        }
    }

    return (
        <main id="cadastro" >
            <Link to={"/"} className="link_btn_voltar">
                <Icon className="btn_voltar" icon="clarity:circle-arrow-solid" />
            </Link>
            <section className="section_img_logo">
                <img src={entrar_logo} alt="Logo Maneasy" />
            </section>
            <section className="section_conteudo">
                <h2>
                    Cadastre-<span>se</span>
                </h2>
                <form className="section_input" action="" onSubmit={VerificarSenha}>
                    <div className="section_cadastro">
                        <label htmlFor="Chapa">Chapa</label>
                        <div className="input_icons">
                            <Icon className="icon" icon="ic:outline-badge" />
                            <input
                                name="Chapa"
                                className="input_field"
                                type="text"
                                placeholder="Digite sua chapa"
                                onChange={(e) => setChapa(e.target.value)}
                                required
                            />

                        </div>
                    </div>
                    <div className="section_cadastro">
                        <label htmlFor="Nome">Nome</label>
                        <div className="input_icons">
                            <Icon className="icon" icon="mingcute:user-4-fill" />
                            <input
                                name="Nome"
                                className="input_field"
                                type="name"
                                placeholder="Digite seu nome"
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="section_cadastro">
                        <label htmlFor="Email">E-mail</label>
                        <div className="input_icons">
                            <Icon className="icon" icon="ic:round-email" />
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
                    <div className="section_input_senha">
                        <div className="input_senha">
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
                        <div className="input_senha">
                            <label htmlFor="ConfirmarSenha">Confirmar Senha</label>
                            <div className="input_icons">
                                <Icon className="icon" icon="mdi:password" />
                                <input
                                    name="ConfirmarSenha"
                                    className="input_field"
                                    type="password"
                                    placeholder="Confirme sua senha"
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="section_btn_confirmar">
                        <Link to={"/"} className="link_confirmar">
                            <button type="submit">Confirmar</button>
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Cadastro;
