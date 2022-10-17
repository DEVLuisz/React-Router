import React from 'react';
import circuloColorido from '../Assets/circulo_colorido.png';
import minhaFoto from '../Assets/minha_foto.jpg';
import styles from './Banner.module.css';

export default function Banner(){
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragrafo}>
        Boas vindas ao meu espaço pessoal! Eu sou Luís Felipe de Cristo, entusiasta de Front-end com o intuíto de ser FullStack. Aqui compartilho alguns artigos das linguagens que já utilizei!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
        className={styles.circuloColorido} 
        src={circuloColorido} 
        alt="Circulo Degradê" 
        aria-hidden={true}
        />

<img
        className={styles.minhaFoto} 
        src={minhaFoto} 
        alt="Luís Felipe" 
        aria-hidden={true}
        />
      </div>
    </div>
  )
}

