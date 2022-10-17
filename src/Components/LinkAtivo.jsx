import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './LinkAtivo.module.css';

export default function LinkAtivo({ children, to }){

  const localizacao = useLocation();

  return (
    <div>
        <Link className={`
        ${styles.link}
        ${localizacao.pathname === to ? styles.linkActive : ''}
        `} to={to}>
          {children}
        </Link>
    </div>
  )
}

