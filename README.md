# Documentation

My whole full stack projects I made and a cool long journey

## Preview Links

visit day01: <https://muhammadriy3d.github.io/full-stack-dev-journey/Day01/public>
visit day02: <https://muhammadriy3d.github.io/full-stack-dev-journey/Day02/public>
visit day02: <https://muhammadriy3d.github.io/full-stack-dev-journey/Day03/public>

## Usage

### First way: Makefile

- Clone this repo to your machine

```shell
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```shell
cd full-stack-dev-journey
```

- default project: day02

```shell
make
```

- Start a development server

```shell
make day01_dev # or any day**
```

- Start a production server

```shell
make day01 # or any day**
```

- for tests (it'll be avaliable later)

```shell
make test_day01 # or any day**
```

### Second way: Docker

- Clone this repo to your machine

```shell
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```shell
cd full-stack-dev-journey
```

- Filesystem server

```shell
docker-compose -f docker-compose.yml up
```

- Day* server

```shell
sudo docker build --build-arg DAY=02 .
```

OR you can run it on custome workdir by use switch `-t example`

```shell
sudo docker build --build-arg DAY=02 -t yourworkdir:latest .
```

### Third way: Manullay

- Clone this repo to your machine

```shell
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```shell
cd full-stack-dev-journey
```

- Go to some project day (e.g: Day01)

```shell
cd Day01
```

- Start a development server

```shell
npm run dev
```

- Start a production server

```shell
npm start
```

- for tests (it'll be avaliable later)

```shell
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
