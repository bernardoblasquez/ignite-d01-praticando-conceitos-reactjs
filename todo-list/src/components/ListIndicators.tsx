
import style from './listIndicators.module.scss'
import './listIndicators.module.scss'

export function ListIndicators(){
   return(
      <div className={style["list-indicators"]}>
         <span className={style["list-indicators__display"]}>
            <span className={style["list-indicators__display-label"]}>Tarefas Criadas</span> 
            <span className={style["list-indicators__display-number"]}>0</span>
         </span>

         <span className={style["list-indicators__display"]}>
            <span className={style["list-indicators__display-label"]}>Concluídas</span>
            <span className={style["list-indicators__display-number"]}>0</span>
         </span>
      </div>
   )
}