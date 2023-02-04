FROM node:17
WORKDIR /app-api
COPY . .
EXPOSE 3000
ENV PORT = 3000
ENV URL_BASE_MONGO = mongodb://flamboyant_sam:27027/linus
RUN npm install
ENTRYPOINT npm start