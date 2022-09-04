import { defineSchema, defineTable, s, SchemaType } from "convex/schema";

export default defineSchema({
  
  users: defineTable({
    name: s.string(),
    email: s.string(),
    password: s.string(),
  }),
  posts: defineTable({
    title: s.string(),
    date: s.number(),
    description: s.string(),
    applicants: s.array<string>(new SchemaType<string,any>),
    applicantNum: s.number(),
    picture: s.string(),
    email: s.string(),
    posterName: s.string()
  }),
});