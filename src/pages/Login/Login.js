import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import style from "./login.module.css";
import google from "../../images/google.png";
import email from "../../images/email.png";
import apple from "../../images/apple.png";
import banner from "../../images/banner.png";
import logo from "../../images/logo.png";

export default function Login() {
  const [inputEmail, setinputEmail] = useState("");
  const [inputSenha, setinputSenha] = useState("");
  const navigate = useNavigate();

  const appId = "n7Du9WmGouDZ7gYjkn5MiXas8nfGjT4qFwrk45zX";
  const apiKey = "JuRfAoomwwFNZwdlB1Ndx4NRj9pX7gMly2aqqYb1";

  const data = {
    email: inputEmail,
    senha: inputSenha,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://tcc-demanda-de-turmas.onrender.com/api/user",
        {
          method: "POST",
          headers: {
            "X-Parse-Application-Id": appId,
            "X-Parse-REST-API-Key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Dados enviados com sucesso:", result);

      localStorage.setItem("userEmail", inputEmail);

      navigate("/home");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  }

  return (
    <>
      <img src={logo} className={style.logo} alt="Logo"></img>
      <div className={style.ContainerBox}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1>
            Bem-Vindo de <br></br> volta
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className={style.InputSignIn}
            value={inputEmail}
            onChange={(event) => setinputEmail(event.target.value)}
          ></input>

          <input
            type="password"
            placeholder="Enter your password"
            className={style.InputSignIn}
            value={inputSenha}
            onChange={(event) => setinputSenha(event.target.value)}
          ></input>

          <a className={style.a}>Esqueceu sua senha?</a>

          <button type="submit" className={style.btnSignIn}>
            Sign In
          </button>
        </form>

        <div className={style.btn}>
          <button className={style.options}>
            <img src={google} width="20px" height="20px" alt="Google"></img>
          </button>
          <button className={style.options}>
            <img src={email} width="22px" height="20px" alt="Email"></img>
          </button>
          <button className={style.options}>
            <img src={apple} width="20px" height="22px" alt="Apple"></img>
          </button>
        </div>
      </div>
      <img src={banner} className={style.imgBanner} alt="Banner"></img>
      <div className={style.line}></div>
    </>
  );
}
