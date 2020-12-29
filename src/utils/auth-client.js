// https://github.com/kentcdodds/bookshelf/blob/69bde2c117660bd988ffbc60f387165d2f852c62/src/utils/auth-client.js

import client from './api-client'

const localStorageKey = '__tickit_token__'

function handleUserResponse({ token, user }) {
  window.localStorage.setItem(localStorageKey, token)
  return { user: { ...user } }
}

function getUser() {
  const token = getToken()
  if (!token) {
    return Promise.resolve(null)
  }
  return client('users/me').catch(error => {
    signout()
    return Promise.reject(error)
  })
}

function signin({ username, password }) {
  return client('users/login', { body: { email: username, password } }).then(
    handleUserResponse,
  )
}

function register({ username, password }) {
  return client('users', { body: { email: username, password } }).then(
    handleUserResponse,
  )
}

function signout() {
  window.localStorage.removeItem(localStorageKey)
  return Promise.resolve()
}

function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

export { signin, register, signout, getToken, getUser }
