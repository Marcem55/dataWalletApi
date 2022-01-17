const { Router } = require('express')
// Importar todos los routers;
const movementsRouter = require('./movements')

const router = Router()

// Configurar los routers
router.use('/movements', movementsRouter)

module.exports = router