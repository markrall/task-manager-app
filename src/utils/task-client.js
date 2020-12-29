// https://github.com/kentcdodds/bookshelf/blob/69bde2c117660bd988ffbc60f387165d2f852c62/src/utils/list-items-client.js

import client from './api-client'

function create(data) {
  return client(('tasks', { method: 'POST', body: data }))
}

function fetchTasks() {
  return client(`/tasks?sortBy=createdAt:desc_completed:desc`)
}

function fetchTask(taskId) {
  return client(`/tasks/${encodeURIComponent(taskId)}`)
}

function update(taskId, updates) {
  return client(`/tasks/${encodeURIComponent(taskId)}`, {
    method: 'PUT',
    body: updates,
  })
}

function remove(taskId) {
  return client(`/tasks/${encodeURIComponent(taskId)}`, { method: 'DELETE' })
}

export { create, fetchTasks, fetchTask, update, remove }
