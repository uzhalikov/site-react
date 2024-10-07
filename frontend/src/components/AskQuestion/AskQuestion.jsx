import { useRef, useState } from 'react'
import styles from './AskQuestion.module.css'
import { sendRequest } from '../../utils'
import { URL } from '../../../config'


export function AskQuestion(){
    const [author, setAuthor] = useState('')
    const [question, setQuestion] = useState('')
    const [message, setMessage] = useState('')
    
    const refs = {
        inputName: useRef(),
        inputQuestion: useRef(),
        labelName: useRef(),
        labelQuestion: useRef(),
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('question', question)
        formData.append('author', author)
        sendRequest(`${URL}/api/questions/`, 'post', formData)
        .then(result => {
            if(result.status === 'success'){
                setMessage(result.text)
                setAuthor('')
                setQuestion('')
            }
        })
    }
    const handleFocus = (label) => {
        refs[label].current.className = styles.show__legend
    }
    const handleBlur = (field, label) => {
        if(!refs[field].current.value){
            refs[label].current.className = styles.hide__legend
        }
    }

    return(
        <div className={styles.container}>
            <fieldset>
                <legend ref={refs.labelName}>what's your name?</legend>
                <input ref={refs.inputName}
                onFocus={() => handleFocus('labelName')}
                onBlur={() => handleBlur('inputName', 'labelName')}
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                autoComplete='off'
                name='name'
                className={styles.field}
                type="text"/>
            </fieldset>
            <fieldset>
                <legend ref={refs.labelQuestion}>write your question here</legend>
                <input ref={refs.inputQuestion}
                onFocus={() => handleFocus('labelQuestion')}
                onBlur={() => handleBlur('inputQuestion', 'labelQuestion')}
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
                autoComplete='off'
                name='question'
                className={styles.field}
                type="text"/>
            </fieldset>
            <button onClick={handleSubmit} className={(author && question) ? `${styles.button} ${styles.active__button}`: styles.button} type="button">Ask</button>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    )
}