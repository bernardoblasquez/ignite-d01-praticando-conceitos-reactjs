import { useState } from 'react' 
import { Header } from './components/Header'
import { ToDoApp } from './components/ToDoApp'
import './global.scss'

const toDoList = [
  {
    id: 1,
    task: {
      description: 'Estudar Projeto 01 do Ignite',
      isDone: true
    }
  },

  {
    id: 2,
    task: {
      description: 'Estudar Projeto 02 do Ignite',
      isDone: false
    }
  },

  {
    id: 3,
    task: {
      description: 'Estudar Fundos imobiliários - MNC1',
      isDone: false
    }
  },

  {
    id: 4,
    task: {
      description: 'Estudar derivativos e estruturas - MNC1',
      isDone: false
    }
  },

  {
    id: 5,
    task: {
      description: 'Estudar Scrum',
      isDone: true
    }
  },
];


export function App() {

  return (
    <ToDoApp listOfTasks={toDoList} />
  )
}
