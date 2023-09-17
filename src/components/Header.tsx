import styles from './header.module.css'
import Image from 'next/image'
import logo from '../assets/logo.png'
import hamMenu from '../assets/ham-menu.svg'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>

                <div className={styles.logoContainer}>
                    <Image src={logo}
                        alt="Vercel Logo"
                        width={50}
                        height={50}
                        priority />
                    <div>MovieBox</div>
                </div>

                <div style={{ width: "40%" }}>
                    <SearchBar />
                </div>

                <div className={styles.menuContainer}>
                    <div>Sign in</div>
                    <Image
                    src={hamMenu}
                    alt='ham-menu'/>

                </div>

            </div>

            <div className={styles.carousel}>
                Movie details
            </div>
        </div>
    )
}

export default Header