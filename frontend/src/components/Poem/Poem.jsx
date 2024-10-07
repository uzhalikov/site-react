import styles from './Poem.module.css'
import { prepareDate } from '../../utils'
import { useLoaderData } from 'react-router-dom'
import { Switcher } from '../Switcher/Switcher'

export function Poem(){
    const poem = useLoaderData()
    return (
        <article className={styles.poem}>
            <Switcher item={poem}/>
            <pre className={styles.poem__text}>
                {String.raw`${poem.poem}`}
            </pre>
            <div className={styles.poem__info}>
                <p className={styles.poem__author}>{poem.author_name},</p>
                <p>{prepareDate(poem.created)}</p>
            </div>
        </article>
    )
}