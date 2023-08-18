import IgniteLogo from '../../assets/ignite-logo.svg'
import styles from './header.module.css'

function Header() {

    return (

        <header className={styles.header}>

            <img src={IgniteLogo} alt="logo do header" />

        </header>
    )
}

export default Header;