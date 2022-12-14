import { query } from './_generated/server'

export default query(async ({ db }, userName: string): Promise<any> => {
  console.log(userName)
  const userDoc = await db
    .table('users')
    .filter((q) => q.eq(q.field('name'), userName))
    .first()
  console.log('Got stuff')
  if (userDoc === null) {
    console.log("its empty");
    return null
  }
  console.log(userDoc)
  return userDoc
})
