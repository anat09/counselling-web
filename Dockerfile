FROM node:16.13.1-alpine3.12 AS npm-deps
WORKDIR /var/www/counselling-web
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "dev"]

FROM npm-deps as npm-build
ENV PORT 3000
CMD ["npm", "start"]
