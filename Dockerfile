FROM node:10-alpine AS alpine
EXPOSE 8080
RUN mkdir -p /app/public /app/src
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY tsconfig.json /app/tsconfig.json
COPY tslint.json /app/tslint.json
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

## install only the packages defined in the package-lock.json (faster than the normal npm install)
RUN npm install

# Run 'npm start' when the container starts.
CMD ["npm", "run", "dev"]