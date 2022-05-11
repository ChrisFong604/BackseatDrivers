# PrismaORM Development workflow

In development:

1. Editing schema.prisma
   make sure to delete the migrations folder in ./primsa

run:
npx prisma generate dev --name init

    npx prisma db seed

This will reset the database and run the seed.ts script to insert dummy data into the database

2. Generating Prisma client

The prisma client is a javascript library generated from the prisma schema. Make sure to generate it again whenever the schema is edited.

run:
npx prisma generate

3. To reset the database records and seed the database, run:

   npx prisma migrate reset

   npx prisma db seed

This will reseed the database with data from the seeding file.

4. For anything else, refer to the CLI docs, or run: npx prisma --help
