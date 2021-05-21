const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPosts();
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedComments();
    console.log('\n----- DATABASE SYNCED -----\n');
    
    process.exit(0);
};

seedAll();