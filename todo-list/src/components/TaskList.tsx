import clipboard from '../assets/Clipboard.svg'
import style from './tasklist.module.scss'
import './tasklist.module.scss' /* bug fix  https://github.com/vitejs/vite/issues/6907*/

export function TaskList(){
   return(
      <div className={style["task-list"]}>
         <div className={style["task-list__indicators"]}>
            <span className={style["task-list__indicator"]}>
               <span className={style["task-list__indicator-label"]}>Tarefas Criadas</span> 
               <span className={style["task-list__indicator-number"]}>0</span>
            </span>

            <span className={style["task-list__indicator"]}>
               <span className={style["task-list__indicator-label"]}>Concluídas</span>
               <span className={style["task-list__indicator-number"]}>0</span>
            </span>
         </div>

         <div className={style["task-list__empty-list"]}>
            <img src={clipboard} alt="" />
            <p>
               <b>Você ainda não tem tarefas cadastradas</b>
            </p>
            <p>
               Crie tarefas e organize seus itens a fazer
            </p>
        </div>
      </div>
   )
}