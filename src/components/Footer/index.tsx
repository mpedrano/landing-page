import styles from './Footer.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <h1>Mariela Pedrano ©</h1>
                <Link href="https://github.com/mpedrano/Haven">Haven GitHub Repo</Link>
            </div>
        </>
    )

}