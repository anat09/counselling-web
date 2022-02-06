FROM node:16.13.1-alpine3.12 AS npm-deps
WORKDIR /var/www/pw/
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM npm-deps as npm-build
RUN npm run build
CMD ["npm", "start"]
