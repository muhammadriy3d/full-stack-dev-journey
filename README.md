# Full stack project

My whole full stack projects I made and a cool long journey

## Preview Links

visit day01: <https://muhammadriy3d.github.io/full-stack-dev-journey/Day01/public>

visit day02: <https://muhammadriy3d.github.io/full-stack-dev-journey/Day02/public>

## Usage

### First way: Makefile

- Clone this repo to your machine

```sh
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```sh
cd full-stack-dev-journey
```

- default project: day02

```sh
make
```

- Start a development server

```sh
make day01_dev // or any day**
```

- Start a production server

```sh
make day01 // or any day**
```

- for tests (it'll be avaliable later)

```sh
make test_day01 // or any day**
```

### Second way: Docker

- Clone this repo to your machine

```sh
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```sh
cd full-stack-dev-journey
```

- Filesystem server

```sh
docker-compose -f docker-compose.yml up
```

- Day* server

```sh
sudo docker build --build-arg DAY=02 .
```

OR you can run it on custome workdir by use switch `-t example`

```sh
sudo docker build --build-arg DAY=02 -t yourworkdir:latest .
```

### Third way: Manullay

- Clone this repo to your machine

```sh
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```sh
cd full-stack-dev-journey
```

- Go to some project day (e.g: Day01)

```sh
cd Day01
```

- Start a development server

```sh
npm run dev
```

- Start a production server

```sh
npm start
```

- for tests (it'll be avaliable later)

```sh
npm test
```

## Code Of Conduct

feel free to contribute and build with me on this repo

rules:

- fork this repo
- create your own branch
- make changes
- create a pull request

## Credits

Copyrights © 2023 Muhammad Riyad, All rights reversed.

Porjects ideas © 2023 roadmap.sh
