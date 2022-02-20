const friends = require('../models/friends.models');

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({error: 'Missing friend name'});
    }

    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend)
    return res.json(newFriend)
}

function getFriends(req, res) {
    res.json(friends);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    console.log('id', friends)
    const friend = friends[friendId];
    console.log(friend)
    if (typeof friendId !== 'undefined' && friendId !== null) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({'error': "Friend does not exist."})
    }
}

module.exports = {postFriend, getFriends, getFriend}