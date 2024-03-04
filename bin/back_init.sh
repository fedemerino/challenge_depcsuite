#!/bin/bash
docker stop $(docker ps -q)
docker compose up -d
npm install
npm run migrate
npm run seed
npm run dev
