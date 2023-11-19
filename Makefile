start default:
	cd Day02 && npm start

install:
	npm install --prefix ./Day0*/

# production

day01:
	cd Day01 && npm start

day02:
	cd Day02 && npm start

day03:
	cd Day03 && npm start

day04:
	cd Day04 && npm start

day05:
	cd Day05 && npm start

day06:
	cd day06 && npm start

# development

day01_dev:
	cd Day01 && npm run dev

day02_dev:
	cd Day02 && npm run dev

day03_dev:
	cd Day03 && npm run dev

day04_dev:
	cd Day04 && npm run dev

day05_dev:
	cd Day05 && npm run dev

day06_dev:
	cd day06 && npm run dev

# tests

test_day01:
	cd Day01 && npm test

test_day02:
	cd Day02 && npm test

test_day03:
	cd Day03 && npm test

test_day04:
	cd Day04 && npm test

test_day05:
	cd Day05 && npm test

test_day06:
	cd day06 && npm test
