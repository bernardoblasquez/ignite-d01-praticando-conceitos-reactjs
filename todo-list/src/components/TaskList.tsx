import {Trash, Circle, CheckCircle} from 'phosphor-react'
import checkedIcon from '../assets/Checked.svg'
import checkIcon from '../assets/Check.svg'
import style from './tasklist.module.scss'
import './tasklist.module.scss' /* bug fix  https://github.com/vitejs/vite/issues/6907*/

export function TaskList(){
   return(
      <ul className={style["task-list"]}>
         <li className={style["task-item"]}> 
            <img src={checkedIcon} alt="" />
            <p className={style["checked-text"]}>
               Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <Trash size={24} weight="bold" />
         </li>

         <li className={style["task-item"]}> 
            <img src={checkIcon} alt="" />
            <p>
               Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <Trash size={24} weight="bold" />
         </li>
      </ul>
   )
}