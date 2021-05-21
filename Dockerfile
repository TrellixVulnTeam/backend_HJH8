FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app/

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"] 