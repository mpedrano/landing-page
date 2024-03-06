import styles from './Card.module.css';

interface ICard {
    children: any;
    header: string;
    description: string;
    button: string;
}

export default function Card({ children, header, description, button }: ICard) {
    return (
        <div className={styles.card}>
            {header && <div className={styles.header}>{header}</div>}
            {description && <div className={styles.description}>{description}</div>}
            <div className={styles.spline}>
                {children}
            </div>
            {button && <button className={styles.button}>{button}</button>}
        </div>
    );
}