import { FocandoContext } from '../contexts/FocandoContext';
import { useContext } from 'react';

import styles from '../styles/components/FocandoHeader.module.css';

export function FocandoHeader() {
  const { focandoLogo, userName, userImage } = useContext(FocandoContext);

  return (
    <header className={ styles.header }>
      <div className={ styles.search }>
        <img src={ focandoLogo } alt="Focando logo" width="36" height="36" />
        <input  placeholder="Pesquisar algo" />
      </div>
      <nav className={ styles.nav }>
        <a href="/profile">
          <img src={ userImage } alt="Profile image" width="28" height="28"/>
          <span>{ userName }</span>
        </a>
      </nav>
    </header>
  );
}