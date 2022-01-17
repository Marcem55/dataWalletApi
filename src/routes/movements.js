const { Router } = require("express")
const { getMovements, getMovementsByName } = require("../controllers/movementsControllers")

const router = Router()

router.get('/', async (req, res) => {
  // const { name } = req.query
  // if(!name) {
    try {
      const movements = await getMovements()
      return res.status(200).json(movements)
    } catch (error) {
      return res.status(400).send(error)
    }
  // } else {
  //   try {
  //     const movements = await getMovementsByName(name)
  //     return res.status(200).json(movements)
  //   } catch (error) {
  //     return res.status(400).send(error)
  //   }
  // }
})

router.post('/', async (req, res) => {
  try {
    const newMovement = req.body
    await createMovement(newMovement)
    return res.status(200).send('Movement succesfully created')
  } catch (error) {
    return res.status(400).send(error)
  }
})