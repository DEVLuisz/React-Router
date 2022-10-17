import React from 'react';
import styles from './Page404.module.css';
import erro404 from '../Assets/erro_404.png'
import Button from 'Components/Button';
import { useNavigate } from 'react-router-dom';

export default function Page404() {

  const navigate = useNavigate();

  return (
    <>
    <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>404</span>

      <h1 className={styles.titulo}>
        Ops! Página Não Encontrada.
      </h1>

      <p className={styles.paragrafo}>
      Something is Wrong!!!
      </p>
      <p className={styles.paragrafo}>
        Tem certeza de que era isso que você estava procurando?
      </p>
      <p className={styles.paragrafo}>
        Aguarde alguns instantes e recarregue a página, ou volte para a página inicial.
      </p>

      <div
      className={styles.botaoContainer}
      onClick={() => navigate(-1)}
      >
        <Button
        tamanho="lg"
        >
          Voltar
        </Button>
      </div>

      <img
      className={styles.imagemCachorro}
      src={erro404}
      alt="Doguinhooo" 
      />
    </div>

    <div className={styles.espacoEmBranco}>

    </div>
    </>
  )
}
