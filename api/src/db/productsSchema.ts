import { integer, pgTable, varchar, text, doublePrecision } from "drizzle-orm/pg-core";
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: doublePrecision().notNull(),
  quantity: integer().default(0),
});
export const productCreateSchema = createInsertSchema(productsTable).omit({
  id: true,
});
export const productUpdateSchema = createUpdateSchema(productsTable).omit({
  id: true,
}).partial();