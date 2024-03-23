FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i --no-audit --force

COPY . .

EXPOSE 8000

RUN npx tsc

CMD ["npm", "start"]