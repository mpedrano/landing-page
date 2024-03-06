import styles from './Header.module.css'
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className={styles.container}>
                <Image src={'/logo.svg'} width={110} height={100} alt="logo" />
                <button className={styles.button}>Sign Up</button>
            </div>
        </>
    )

}