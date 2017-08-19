const Team = require('../../db').Team

const getTeams = (req, res) => {
  Team.find({}).then(teams => {
    res.render('admin-team', { teams })
  })
}

const postTeams = (req, res) => {
  let newTeam = new Team()

  newTeam.teamName = req.body.teamName || ''
  newTeam.teamNumber = req.body.teamNumber || ''
  newTeam.members = []
  newTeam.parts = []
  newTeam.save()

  res.json({ message: 'post request received' })
}

const deleteTeams = (req, res) => {
  Team.remove().then(err => {
    if (err) console.log(err)

    res.json({ message: 'delete request received' })
  })
}

module.exports = {
  getTeams,
  postTeams,
  deleteTeams
}
