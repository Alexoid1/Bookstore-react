FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json package.json
copy package-lock.json package-lock.json
RUN npm install
COPY . .
RUN echo "SKIP_PREFLIGHT_CHECK=true" >> .env
CMD ["npm", "run", "start"]
