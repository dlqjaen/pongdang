const { Router } = require('express')

const router = Router()

// Mock Users
const users = [
  { name: '이경민' },
  { name: '이범두' },
  { name: '윤태훈' }
]

router.get('/linked', function (req, res, next) {
  res.json(users.length)
})
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users)
})
/* GET user by ID. */
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})


module.exports = router
