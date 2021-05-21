const { Post } = require('../models');

const postData = [{
        title: 'Post 1',
        content: 'Lorem ipsum dolor',
        user_id: 1

    },
    {
        title: 'Post 2',
        content: 'Lorem ipsum dolor, Lorem ipsum dolor',
        user_id: 2
    },
    {
        title: 'Post 3',
        content: 'Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;