import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, userName: string, userEmail: string, userPassword: string) => {
    const userDoc = await db
      .table('users')
      .filter((q) => q.eq(q.field('name'), userName))
      .first()
    if (userDoc === null) {
      db.insert('users', {
        name: userName,
        email: userEmail,
        password: userPassword
      })
      // console.log messages appear in your browser's console and the Convex dashboard.
      console.log('Created user.')
    } else {
      console.log("User already exists");
    }
  }
)
