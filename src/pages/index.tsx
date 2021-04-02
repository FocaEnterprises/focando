import { FocandoHeader } from '../components/FocandoHeader';
import { FocandoProvider } from '../contexts/FocandoContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <FocandoProvider>
      <div className={ styles.container }>
        <FocandoHeader />
      </div>
    </FocandoProvider>
  )
}
