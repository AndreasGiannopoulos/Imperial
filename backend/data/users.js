import bcryptjs from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Andreas',
    email: 'andreas@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'Aliki',
    email: 'aliki@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'Giannis',
    email: 'giannis@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User',
    email: 'user@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User1',
    email: 'user1@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User2',
    email: 'user2@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User3',
    email: 'user3@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User4',
    email: 'user4@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User5',
    email: 'user5@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User6',
    email: 'user6@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User7',
    email: 'user7@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User8',
    email: 'user8@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User9',
    email: 'user9@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'User10',
    email: 'user10@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
  },
];

export default users;
