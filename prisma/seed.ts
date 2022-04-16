// import { Prisma, PrismaClient } from '@prisma/client';
// import { randomUUID } from 'crypto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.school.createMany({
    data: [
      {
        school_name: 'Simon Fraser University',
        school_acronym: 'SFU',
        school_location: 'Burnaby mountain',
      },
      {
        school_name: 'Kwantlen Polytechnic University',
        school_acronym: 'KPU',
        school_location: '8771 Lansdowne Rd, Richmond, BC V6X 3X7',
      },
      {
        school_name: 'University of British Columbia',
        school_acronym: 'UBC',
        school_location: 'Vancouver, BC V6T 1Z4',
      },
      {
        school_name: 'Capilano University',
        school_acronym: 'CapU',
        school_location: 'Vancouver, BC V29 XU4',
      },
      {
        school_name: 'Douglas College',
        school_acronym: 'DC',
        school_location: 'Vancouver, BC V6T 1Z4',
      },
      {
        school_name: 'University Canada West',
        school_acronym: 'UCW',
        school_location: '626 W Pender St #100, Vancouver, BC V6B 1V9',
      },
      {
        school_name: 'University of Northern British Columbia ',
        school_acronym: 'UNBC',
        school_location: '3333 University Way, Prince George, BC V2N 4Z9',
      },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        school_name: 'Simon Fraser University',
        first_name: 'Christopher',
        last_name: 'Fong',
        email: 'ccffoonngg@gmail.com',
        phone_number: '604-441-7828',
      },
      {
        school_name: 'Simon Fraser University',
        first_name: 'David',
        last_name: 'Lowe',
        email: 'drlowe@gmail.com',
        phone_number: '604-808-1732',
      },
      {
        school_name: 'Simon Fraser University',
        first_name: 'Kevin',
        last_name: 'Shi',
        email: 'kshi1738@gmail.com',
        phone_number: '778-108-1102',
      },
      {
        school_name: 'Simon Fraser University',
        first_name: 'Hamla',
        last_name: 'Tzarifik',
        email: 'HamTza@hotmail.ca',
        phone_number: '778-441-7828',
      },
    ],
  });

  const studentsUBC = await prisma.user.createMany({
    data: [
      {
        school_name: 'University of British Columbia',
        first_name: 'Jeremy',
        last_name: 'Jackson',
        email: 'JJ@gmail.com',
        phone_number: '604-320-0525',
      },
      {
        school_name: 'University of British Columbia',
        first_name: 'Lavar',
        last_name: 'Ball',
        email: 'LavarBBB@gmail.com',
        phone_number: '604-451-0782',
      },
      {
        school_name: 'University of British Columbia',
        first_name: 'Lamelo',
        last_name: 'Ball',
        email: 'LameloBallBBB@gmail.com',
        phone_number: '778-215-8284',
      },
    ],
  });

  const ChrisDriver = await prisma.user
    .findUnique({
      where: { email: 'ccffoonngg@gmail.com' },
      select: {
        user_id: true,
      },
    })
    .then(async (user) => {
      await prisma.driver.create({
        data: {
          driver: {
            connect: {
              user_id: user.user_id,
            },
          },
        },
      });
    });

  // const Tyrone = await prisma.user.create({
  //   data: {
  //     school: {
  //       connect: { school_name: 'Simon Fraser University' },
  //     },
  //     first_name: 'Tyrone',
  //     last_name: 'Williams',
  //     email: 'TWillForPres@gmail.com',
  //     address: '7254 Crescent Rd.',
  //     phone_number: '604-215-4345',
  //   },
  // });
  // const Quinton = await prisma.user.create({
  //   data: {
  //     school: {
  //       connect: { school_name: 'University of British Colombia' },
  //     },
  //     first_name: 'Quinton',
  //     last_name: 'Larone',
  //     email: 'QLyurrrr23@gmail.com',
  //     address: '3554 Crescent Rd.',
  //     phone_number: '223-363-4145',
  //   },
  // });

  // const Drake = await prisma.user.create({
  //   data: {
  //     school: {
  //       connect: { school_name: 'Kwantlen Polytechnic University' },
  //     },
  //     first_name: 'Drake',
  //     last_name: 'Fey',
  //     email: 'Draydray27@hotmail.ca',
  //     address: '7472 Crescent Rd.',
  //     phone_number: '778-215-4334',
  //   },
  // });
  // const Quayvon = await prisma.user.create({
  //   data: {
  //     school: {
  //       connect: { school_name: 'Kwantlen Polytechnic University' },
  //     },
  //     first_name: 'Quayvon',
  //     last_name: 'the 2nd',
  //     email: 'Quayzymans@hotmail.com',
  //     address: '3251 Elmer Street',
  //     phone_number: '201-257-4174',
  //   },
  // });

  // const TyroneTheDriver = await prisma.driver.create({
  //   data: {
  //     driver: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });

  // const TyronesRide = await prisma.ride.create({
  //   data: {
  //     driver: {
  //       connect: {
  //         driver_id: 1,
  //       },
  //     },
  //     date_of_ride: 'Today',
  //     number_of_seats: 3,
  //     departure_location: 'Las Vegas',
  //     school_location: 'somewhere',
  //   },
  // });

  // const QuintonTheDriver = await prisma.driver.create({
  //   data: {
  //     driver: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });

  // const QuintonsRide = await prisma.ride.create({
  //   data: {
  //     driver: {
  //       connect: {
  //         driver_id: 2,
  //       },
  //     },
  //     date_of_ride: 'Tomorrow',
  //     number_of_seats: 12,
  //     departure_location: 'South America',
  //     school_location: 'i forgot',
  //   },
  // });

  // const DrakeRequestTyrone = await prisma.request.create({
  //   data: {
  //     requester: {
  //       connect: {
  //         id: 3,
  //       },
  //     },
  //     requested_ride: {
  //       connect: {
  //         ride_id: 1,
  //       },
  //     },
  //     requester_location: 'too far man',
  //   },
  // });

  // const DrakeRequestQuinton = await prisma.request.create({
  //   data: {
  //     requester: {
  //       connect: {
  //         id: 3,
  //       },
  //     },
  //     requested_ride: {
  //       connect: {
  //         ride_id: 2,
  //       },
  //     },
  //     requester_location: 'too far man',
  //   },
  // });
  // const QuayvonRequestQuinton = await prisma.request.create({
  //   data: {
  //     requester: {
  //       connect: {
  //         id: 4,
  //       },
  //     },
  //     requested_ride: {
  //       connect: {
  //         ride_id: 2,
  //       },
  //     },
  //     requester_location: 'uhhh',
  //   },
  // });

  //   const bunchORides = await prisma.ride.createMany({
  //     data: [
  //       {
  //         host_name: 'Krazz Peyton',
  //         phone_number: '604-146-2986',
  //         email: 'krabbypatty@gmail.com',
  //         description:
  //           'Heading up the mountain every M,Tues,Fri at 8:30 a.m every morning',
  //         date_of_ride: '2022-05-10',
  //         number_of_seats: 7,
  //         departure_location: 'Metrotown',
  //         school_location: 'Simon Fraser University',
  //       },
  //       {
  //         host_name: 'Andrew Orlowski',
  //         phone_number: '778-125-9882',
  //         email: 'Andrew@gmail.com',
  //         description:
  //           'Heading up the mountain every M,Tues,Fri at 8:30 a.m every morning',
  //         date_of_ride: '2022-07-26',
  //         number_of_seats: 7,
  //         departure_location: 'Richmond, BC',
  //         school_location: 'University of Canada West',
  //       },
  //       {
  //         host_name: 'Kellyanne Qi',
  //         phone_number: '778-635-5612',
  //         email: 'KellyQi192@gmail.com',
  //         description:
  //           'Heading to campus tomorrow in the afternoon, send me a SMS or email if you want to carpool!',
  //         date_of_ride: '2022-11-02',
  //         number_of_seats: 7,
  //         departure_location: 'Surrey',
  //         school_location: 'University of British Columbia',
  //       },
  //       {
  //         host_name: 'Carmen Bridges',
  //         phone_number: '604-235-7422',
  //         email: 'CarmenBridges192@gmail.com',
  //         description:
  //           'Have 1 spot available for anyone who wants to head up the mountain at 2:00p.m on Tuesdays and Thursdays, just shoot me a message',
  //         date_of_ride: '2022-09-21',
  //         number_of_seats: 7,
  //         departure_location: 'West Vancouver',
  //         school_location: 'Simon Fraser University',
  //       },
  //       {
  //         host_name: 'Kleo Stew',
  //         phone_number: '778-1215-3321',
  //         email: 'KStew@gmail.com',
  //         description:
  //           'Have 1 spot available for anyone who wants to head up the mountain at 2:00p.m on Tuesdays and Thursdays, just shoot me a message',
  //         date_of_ride: '2022-07-11',
  //         number_of_seats: 7,
  //         departure_location: 'West Vancouver',
  //         school_location: 'Simon Fraser University',
  //       },
  //       {
  //         host_name: 'Leonardo Bridges',
  //         phone_number: '604-235-7422',
  //         email: 'LeoBridges2164@gmail.com',
  //         description:
  //           'Have 1 spot available for anyone who wants to head up the mountain at 2:00p.m on Tuesdays and Thursdays, just shoot me a message',
  //         date_of_ride: '2022-09-25',
  //         number_of_seats: 7,
  //         departure_location: 'West Vancouver',
  //         school_location: 'Simon Fraser University',
  //       },
  //     ],
  //   });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
