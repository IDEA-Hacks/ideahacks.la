const User = require('../../db').User

const getUser = (req, res) => {
  User.find({}).then(users => {
    res.json(users)
  })
}

const postUser = (req, res) => {
  let trey = new User({
    firstName = 'Trey',
    lastName = 'Crossley',
    email = 'jeffschan97@gmail.com',
    password = 'jeffrey'
  })
  trey.save()

  res.json({ message: 'Received POST request' })
}

const deleteUser = (req, res) => {
  User.remove({})

  res.json({ message: 'Received DELETE requets' })
}

module.exports = {
  getUser,
  postUser,
  deleteUser
}
