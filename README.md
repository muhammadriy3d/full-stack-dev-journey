# Full stack project

My whole full stack projects I made and a cool long journey

## Preview Links

visit day01: <https://muhammadriy3d.github.io/full-stack-dev-journey/Day01/public>

visit day02: <https://muhammadriy3d.github.io/full-stack-dev-journey/Day02/public>

## Usage

### First way: Makefile

- Clone this repo to your machine

```bash
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```bash
cd full-stack-dev-journey
```

- default project: day02

```bash
make
```

- Start a development server

```bash
make day01_dev // or any day**
```

- Start a production server

```bash
make day01 // or any day**
```

- for tests (it'll be avaliable later)

```bash
make test_day01 // or any day**
```

### Second way: Docker

- Clone this repo to your machine

```bash
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```bash
cd full-stack-dev-journey
```

- Filesystem server

```bash
docker-compose -f docker-compose.yml up
```

- Day* server

```bash
sudo docker build --build-arg DAY=02 .
```

OR you can run it on custome workdir by use switch `-t example`

```bash
sudo docker build --build-arg DAY=02 -t yourworkdir:latest .
```

### Third way: Manullay

- Clone this repo to your machine

```bash
git clone https://github.com/muhammadriy3d/full-stack-dev-journey.git
```

- Change directory to the cloned repo

```bash
cd full-stack-dev-journey
```

- Go to some project day (e.g: Day01)

```bash
cd Day01
```

- Start a development server

```bash
npm run dev
```

- Start a production server

```bash
npm start
```

- for tests (it'll be avaliable later)

```bash
npm test
```

## Code Of Conduct

feel free to enchance and build with me on this repo

rules:

- fork this repo
- create your own branch
- make changes
- 

## Credits

Copyrights © 2023 Muhammad Riyad, All rights reversed.

Porjects ideas © 2023 roadmap.sh
