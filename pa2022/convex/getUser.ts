import { query } from './_generated/server'

export default query(async ({ db }, userName: string): Promise<string> => {
  console.log(userName)
  const userDoc = await db
    .table('users')
    .filter((q) => q.eq(q.field('name'), userName))
    // .first()
  console.log('Got stuff')
  if (userDoc === null) {
    console.log("its empty");
    return "hi"
  }
  console.log(userDoc)
  return "hi"
})
