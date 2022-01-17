const { Sequelize } = require("sequelize")
const Op = Sequelize.Op
const { Movement } = require('../db')

// Funcion para traer todos los movimientos
const getMovements = async () => {
  try {
    const movements = await Movement.findAll();
    return movements
  } catch (error) {
    console.log(error);
  }
}

// const getMovementsByName = async (name) => {
//   try {
//     const movements = await Movement.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${name}%`
//         }
//       }
//     })
//     return movements
//   } catch (error) {
//     console.log(error);
//   }
// }

const createMovement = async (newMovement) => {
  const { concept, amount, date, type } = newMovement
  try {
    const movement = await Movement.create({
      concept,
      amount,
      date,
      type
    })

    return movement
  } catch (error) {
    console.log(error);
  }
}