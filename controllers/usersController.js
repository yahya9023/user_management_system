const models = require('../models')

async function getUsers(req, res) {
  const users = await models.User.findAll({
    attributes: {
      exclude: ['DepartementId']
    },
    include: {model: models.Departement, attributes: ['name']}
  })
  res.render('users/index', {users})
}

async function deleteUser(req, res) {
  const id = req.params.id
  const users = await models.User.destroy({
    where: {id}
  })
  res.redirect('back')
}

// Update
async function editUser(req, res) {
  const id = req.params.id
  const user = await models.User.findOne({ where: { id } })
  const departements = user ? await models.Departement.findAll() : null
  
  res.render('users/edit', {user, departements})
}

async function updateUser(req, res) {
  const id = req.params.id
  const data = req.body
  await models.User.update(data, {
    where: { id }
  })
  res.redirect('/users')
} 

// ADD
async function addUser(req, res) {
  const departements = await models.Departement.findAll()
  
  res.render('users/add', {departements})
}

async function createUser(req, res) {
  const data = req.body
  await models.User.create(data)
  res.redirect('/users')
} 


module.exports = {
    getUsers,
    deleteUser,
    editUser,
    updateUser,
    addUser,
    createUser
}