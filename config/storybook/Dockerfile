# .storybook/Dockerfile

FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 6006

CMD ["npm", "run", "storybook"]