import type {FunctionComponent} from "react";

import styles from "./Card.module.scss";

type CardProps = { href: string, title: string, body: string | JSX.Element };
const Card: FunctionComponent<CardProps> = ({href, title, body}) => {
    return (<li className={styles.linkCard}>
        <a href={href}>
            <h2>
                {title}
                <span>&rarr;</span>
            </h2>
            <p>
                {body}
            </p>
        </a>
    </li>);
}

export default Card;

