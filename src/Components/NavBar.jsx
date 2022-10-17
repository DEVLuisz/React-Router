import React from 'react';
import { Link } from 'react-router-dom';
import LinkAtivo from './LinkAtivo';
import styles from './NavBar.module.css';

export default function NavBar() {

  return (
    <header>
      <nav className={styles.navegacao}>
        <LinkAtivo to="/">
          Início
        </LinkAtivo>
        <LinkAtivo to="/sobremim">
          Sobre Mim
        </LinkAtivo>
      </nav>
    </header>
  )
}

