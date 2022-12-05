import { PlusCircle } from 'phosphor-react'
import style from './taskForm.module.scss'


export function TaskForm(){
   return(
      <form className={style["task-form"]}>
         <input 
            type="text"
            className={style["task-form__input"]}
            />
         <button className={style["task-form__button"]}> 
            Criar
            <PlusCircle 
               className={style["icon-style"]}
               weight="bold"
               size={24} /> 
         </button> 
      </form> 
   )
}