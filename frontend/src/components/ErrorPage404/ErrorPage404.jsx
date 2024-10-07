import styles from './ErrorPage404.module.css'
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function ErrorPage404(){
    const error = useRouteError()
    
    return (
    	<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.code}>{error.status}</h3>
				<p className={styles.description}>К сожалению, данная страница не найдена, переходите на <Link className={styles.link} to={'/'}>главную</Link>, там есть похожие.</p>
			</div>
    	</div>
    )
}