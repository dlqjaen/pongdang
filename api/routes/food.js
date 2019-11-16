const { Router } = require('express')

const router = Router()

const category = [
  'korea',
  'asia',
  'fast',
  'western'
]
const food = {
  korea: ['김치찌개', '된장찌개'],
  asia: [],
  fast: [],
  western: []
}

/* GET users listing. */
router.get('/category', function (req, res, next) {
  res.json(category)
})

router.get('/:food', function (req, res, next) {
  res.json(food[req.params.food])
})

module.exports = router