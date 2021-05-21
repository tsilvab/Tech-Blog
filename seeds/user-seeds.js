const { User } = require('../models');

const userData = [{
        username: "Tsilva1",
        password: "password1"

    },
    {
        username: "Msilva2",
        password: "password12"
    },
    {
        username: "Bsilva3",
        password: "password123"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;