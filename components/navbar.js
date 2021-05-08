import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';


const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo} >
                <Image src="/logo.png" width={127} height={77} />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/" className={styles.link}>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/moon">Moon List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;