import React, { useState, useEffect } from 'react';
import style from './home.module.css'
import Modal from "react-modal";
import emailhome from '../../images/emailhome.png'
import search from '../../images/search.png'

export default function Home() {

    const [userData, setUserData] = useState(null);

    const appId = 'n7Du9WmGouDZ7gYjkn5MiXas8nfGjT4qFwrk45zX';
    const apiKey = 'JuRfAoomwwFNZwdlB1Ndx4NRj9pX7gMly2aqqYb1';

        useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await fetch('https://parseapi.back4app.com/classes/user', {
                headers: {
                    'X-Parse-Application-Id': appId,
                    'X-Parse-REST-API-Key': apiKey,
                },
                });

                const result = await response.json();
                setUserData(result);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
            };

            fetchData();
        }, []);

        if (!userData) {
            return <div>Carregando...</div>;
        }

    return (
        <div className={style.background}>
            <header className={style.header}>
                <div className={style.person}>
                    
                </div>
                <div className={style.section}>
                    <h2 className={style.name}>Helena dos Santos</h2>
                    <img src={emailhome} className={style.emailhome}></img> 
                    <p className={style.email}>{userData.email}</p>
                    <img></img>
                    
                </div>
            </header>
            <div className={style.Btn}>
                <button className={style.BtnGen}>Gerenciar salas</button>
                <button className={style.BtnDoc}>Documentos</button>
                <button className={style.BtnPre}>Preferências</button>
                <button className={style.BtnOut}>Outros</button>
            </div>
            
            <section className={style.session}>
                <h2 className={style.h2}>Solicitações</h2>
                <input type='text' className={style.Input}></input>
                <button className={style.BtnAdd}>Adicionar</button>
            </section> 
            <div className={style.Info}>
                    <div className={style.Box}>
                        <p className={style.Sip}>SI</p>
                    </div>
                    <div className={style.info}>
                        <h5 className={style.hinfo}>Sistemas para Internet - Teste de Software</h5>
                        <p className={style.pinfo}>23/10/2023</p>
                    </div>
                </div>

        </div>
    )
 }