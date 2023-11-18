# syntax=docker/dockerfile:1

# Stage 1
FROM node:21.1.0 as builder

# Install npm globally
RUN npm install -g npm@latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package.json .

# Install dependencies
RUN npm install

# Copy remaining files
COPY . .

ARG DAY

# Conditional execution based on environment variable
RUN if [ "$DAY" = "01" ]; then \
      # Copy package.json and package-lock.json files for day01
      cd ./Day01 && cp package.json ../ && npm install && cp -r . ../ && cd .. && npm start; \
    elif [ "$DAY" = "02" ]; then \
      # Copy package.json and package-lock.json files for day01
      cd ./Day02/ && cp package.json ../ && npm install && cp -r . ../ && cd .. && npm start; \
    elif [ "$DAY" = "03" ]; then \
      # Copy package.json and package-lock.json files for day01
      cd ./Day03/ && cp package.json ../ && npm install && cp -r . ../ && cd .. && npm start; \
    elif [ "$DAY" = "04" ]; then \
      # Copy package.json and package-lock.json files for day01
      cd ./Day04/ && cp package.json ../ && npm install && cp -r . ../ && cd .. && npm start; \
    else \
      npm start; \
    fi

# COPY package.json .
# COPY package-lock.json .

# RUN npm install

# COPY . .
# RUN npm start
