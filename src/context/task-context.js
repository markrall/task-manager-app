import React from 'react'
import { useAuth } from './auth-context'
import { useUser } from './user-context'
import * as taskClient from '../utils/task-client'

const TaskStateContext = React.createContext()
const TaskDispatchContext = React.createContext()

function taskReducer(tasks, action) {
  switch (action.type) {
    case 'add': {
      return [...tasks, action.task]
    }
    case 'remove': {
      return tasks.filter(taskItem => taskItem.id === action.id)
    }
    case 'update': {
      return tasks.map(taskItem => {
        if (taskItem.id === action.task.id) {
          return { ...taskItem, ...action.task }
        }
        return taskItem
      })
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
