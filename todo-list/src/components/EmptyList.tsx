import clipboard from '../assets/Clipboard.svg'
import style from './emptyList.module.scss'
import './emptyList.module.scss'

export function EmptyList (){
   return(
      <div className={style["empty-list"]}>
         <img src={clipboard} alt="" />
         <p>
            <b>Você ainda não tem tarefas cadastradas</b>
         </p>
         <p>
            Crie tarefas e organize seus itens a fazer
         </p>
      </div>
   )
}