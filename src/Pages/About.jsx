import ModelPost from 'Components/ModelPost';
import React from 'react';
import fotoCapa from '../Assets/sobre_mim_capa.png';
import fotoSobreMim from '../Assets/sobre_mim_foto.jpg';
import styles from './About.module.css';

export default function About() {
  return (
    <ModelPost
    fotoCapa={fotoCapa}
    titulo="Sobre Mim"
    >

      <h3 className={styles.subtitulo}>
        Olá, eu sou o Luís!
      </h3>

      <img
      src={fotoSobreMim}
      alt="Foto do Luís" 
      className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
      Bem vindo! Me chamo Luís Felipe de Cristo, atualmente atuo em uma área mais voltada para
      hardware, que seria manutenção de computadores, impressoras, redes de computadores e também 
      suporte ao usuário/cliente. Sou Técnico de Informática!
      </p>
      <p className={styles.paragrafo}>
      Adoro estudar Front-End e um pouco de Back-End (considero dificil). 
      </p>
      <p className={styles.paragrafo}>
      Utilizo da plataforma paga da Alura e da Origamid para adquirir conhecimento e um pouco de 
      experiência em algumas linguagens por meios dos cursos que eles disponibilizam.
      </p>
      <p className={styles.paragrafo}>
        Hoje em dia, possuo mais familiaridade com React, tanto com Javascprit quanto com Typescript,
        apesar de adorar a "facilidade" do Svelte e a do VUE. Das tencologias SPA só não possuo conhecimento com Angular.
      </p>
      <p className={styles.paragrafo}>
        Sou estudante do quarto período de Engenharia de Software, pretendo me tornar um desenvolvedor Front, Back ou até mesmo FullStack. Aumejo atuar na aréa DEV como um  desenvolvedor excelente em alguma empresa ou como freelancer.
      </p>
      <p className={styles.paragrafo}>
      Já possuo uma base de conhecimento em React, Javascript, Typescript, Svelte & SvelteKit, Vue, Postgres, PHP, HTML, CSS, SASS, React-Native com Expo, Go, Elixir, Portugol, NodeJS, BulmaCSS, Jquery, & Bootstrap.
      </p>
    </ModelPost>
  )
}
