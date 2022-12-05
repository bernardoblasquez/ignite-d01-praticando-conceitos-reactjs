import logo from '../assets/logo.svg'
import style from './header.module.scss'
import { TaskForm } from './TaskForm'


export function Header(){
   return(
      <header className={style["main-header"]}>
         <div className={style.container}>
            <img className={style["main-header__logo"]} src={logo} alt="" />

            <TaskForm />
         </div>
      </header>
   )
}