const models = require('../models')

async function getDepartements(req, res) {
    const departements = await models.Departement.findAll()
    res.render('departements/index', {departements})
  }

  async function deleteDepartement(req, res) {
    const id = req.params.id
    await models.Departement.destroy({ where: {id} })
    res.redirect('back')
  }



  async function createDepartement(req, res) {
    const data = req.body
    await models.Departement.create(data)
    res.redirect('/departements')
  } 

async function addDepartement(req, res) {
    const departements = await models.Departement.findAll()
    
    res.render('departements/add', {departements})
  }

  async function editDepartement(req, res) {
    const id = req.params.id
    const departement = await models.Departement.findOne({ where: { id } })
    
    res.render('departements/edit', {departement})
  }
  
  async function updateDepartement(req, res) {
    const id = req.params.id
    const data = req.body
    await models.Departement.update(data, { where: { id } })
    res.redirect('/departements')
  } 
  


  module.exports = {
    getDepartements,
    deleteDepartement,
    addDepartement,
    createDepartement,
    editDepartement,
    updateDepartement
  }