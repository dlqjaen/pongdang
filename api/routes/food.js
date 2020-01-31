const { Router } = require('express')

const router = Router()

const category = [
  'korea',
  'asia',
  'fast',
  'japanese',
  'western',
  'wellbeing'
]
const food = {
  korea: ['김치찌개', '된장찌개', '부대찌개', '순두부', '미역국', '족발', '제육볶음', '생선구이', '보쌈정식', '만둣국', '감자탕', '칼국수', '갈비탕', '삼계탕(백숫)', '찜닭', '국밥', '김치볶음밥', '닭갈비'],
  asia: ['짜장면', '짬뽕', '탕수육', '쌀국수', '볶음밥', '군만두', '샤브샤브'],
  fast: ['돈까스', '김밥', '라면', '떡볶이', '국수', '순대', '빵', '햄버거', '우동', '라볶이', '치킨', '샌드위치', '도넛', '쫄면', '비빔만두', '편의점 도시락'],
  japanese: ['스시', '돈까스', '덮밥(규동, 돈부리)', '롤김밥', '메밀', '라멘'],
  western: ['스파게티', '피자', '스테이크', '리조또'],
  wellbeing: ['샐러드', '고구마', '단호박', '닭가슴살', '쉐이크']
}

/* GET users listing. */
router.get('/category', function (req, res, next) {
  res.json(category)
})

router.get('/:food', function (req, res, next) {
  res.json(food[req.params.food])
})

module.exports = router