const Category = require('../../models/Category/CategoryModel')

module.exports = {
  async post(req, res) {
    const { description } = req.body

    if (!description) {
      return res.json({
        status: 400,
        success: false,
        message: 'Verifique as informações enviadas'
      })
    }

    try {
      const category = new Category({ description })
      const response = await category.save()
      return res.json({
        status: 200,
        success: true,
        message: 'Dados salvos com sucesso',
        data: response
      })
    } catch (err) {
      return res.json({
        status: 500,
        success: false,
        message: 'Erro interno no servidor'
      })
    }
  },
  async get(req, res) {

  },
  async update(req, res) {

  },
  async delete(req, res) {

  }
}