#PrismaORM

In development:

Delete the migrations folder in ./primsa

run:

    npx prisma generate dev --name init

    npx prisma db seed

This will reset the database and run the seed.ts script to insert dummy data into the database
