import { getUser } from './auth-client'
// TODO: add list-items-client logic to handle tasks
// https://github.com/kentcdodds/bookshelf/blob/69bde2c117660bd988ffbc60f387165d2f852c62/src/utils/bootstrap.js

async function bootstrapAppData() {
  const data = await getUser()
  if (!data) {
    return { user: null }
  }
  const user = { user: { ...data } }
  return { user }
}

export { bootstrapAppData }
