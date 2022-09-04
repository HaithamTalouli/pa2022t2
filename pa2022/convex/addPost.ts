import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, eventTitle: string, eventDate: number, eventDescription: string, applicantName: string, eventPicture: string, eventEmail: string, eventPosterName: string) => {
    const userDoc = await db
      .table('posts')
      .filter((q) => q.eq(q.field('title'), eventTitle))
      .first()
    if (userDoc === null) {
      db.insert('posts', {
        title: eventTitle,
        date: eventDate,
        description: eventDescription,
        applicants: [applicantName],
        applicantNum: 1,
        picture: eventPicture,
        email: eventEmail,
        posterName: eventPosterName
      })
      // console.log messages appear in your browser's console and the Convex dashboard.
      console.log('Created post.')
    } else {
      console.log("Post already exists");
    }
  }
)