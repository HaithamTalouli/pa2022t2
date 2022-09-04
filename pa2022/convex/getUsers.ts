import { query } from './_generated/server'

export default query(async ({ db }): Promise<any> => {
  const userDoc = await db
    .table('users')
    .collect()
  console.log('Got stuff')
  if (userDoc === null) {
    console.log("its empty");
    return null
  }
  console.log(userDoc)
  return userDoc
})