import { Link } from "react-router-dom";
 import style from './login.module.css';
 import google from '../../images/google.png';
 import email from '../../images/email.png';
 import apple from '../../images/apple.png';
 import banner from '../../images/banner.png';
 import logo from '../../images/logo.png';


 export default function login() {
      
    return (
        <>
        <img src={logo}></img>
        <div className={style.ContainerBox}>
            <h1>Bem-Vindo de volta</h1>
            <input type='text' placeholder='Enter your email' className={style.InputSignIn}></input>
            <input type='text' placeholder='Enter your password' className={style.InputSignIn}></input>
            <a className={style.a}>Esqueceu sua senha?</a>

            <div>
                <button className={style.btnSignIn} >
                </button>
            </div>

            
            <div className={style.btn}>
                <button className={style.options}>
                    <img src={google} width='25px' height='25px' ></img>
                </button>
                <button className={style.options}>
                    <img src={email} width='35px' height='30px' align='center'></img>
                </button>
                <button className={style.options} >
                    <img src={apple} width='25px' height='30px'></img>
                </button>
                
            </div>
        </div>
            <img src={banner} className={style.imgBanner}></img>
        </>
    )
 }