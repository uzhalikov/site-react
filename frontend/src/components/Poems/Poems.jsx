import styles from './Poems.module.css'
import { PoemPreview } from '../PoemPreview/PoemPreview'
import { useLoaderData } from 'react-router-dom'
import { useRef } from 'react'

export function Poems(){
    const poems = useLoaderData()
    console.log(poems)
    const poemsRef = useRef()

    return <div ref={poemsRef} className={styles.poems}>{poems.map((poem, index) => <PoemPreview key={poem.id} poem={poem} index={index}/>)}</div>
}
