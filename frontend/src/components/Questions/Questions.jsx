import styles from './Questions.module.css'
import { useState } from 'react'
import { AskQuestion } from '../AskQuestion/AskQuestion'
import { AllQuestions } from '../AllQuestions/AllQuestions'

export function Questions(){
    const [active, setActive] = useState('ask')

    const getClassName = (item) => item === active ? `${styles.active__question} ${styles.section__question}` : styles.section__question
    return (
        <div className={styles.questions}>
            <section className={styles.questions__section}>
                <span onClick={() => setActive('ask')} id='ask' className={getClassName('ask')}>Ask a question</span>
                <span onClick={() => setActive('all')} id='all' className={getClassName('all')}>All the questions</span>
            </section>
            { active === 'ask' ? <AskQuestion/> : <AllQuestions/>}
        </div>
    )
}