import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Registered } from '../Assets/marca_registrada.svg';

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <Registered />
      Desenvolvido por Luís Cristo.
    </footer>
  )
}