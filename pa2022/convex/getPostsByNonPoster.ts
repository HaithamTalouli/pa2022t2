import { query } from './_generated/server'

export default query(async ({ db }, eventPosterName: string): Promise<any> => {
  console.log(eventPosterName)
  const userDoc = await db
    .table('posts')
    .filter((q) => q.neq(q.field('posterName'), eventPosterName))
    .collect()
  console.log('Got stuff')
  if (userDoc === null) {
    console.log("its empty");
    return null
  }
  console.log(userDoc)
  return userDoc
})