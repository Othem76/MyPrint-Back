FROM node:20.17

WORKDIR /app

COPY package*.json ./

RUN npm install @swc/core-linux-x64-gnu && npm ci

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install curl gnupg -y \
  && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install google-chrome-stable -y --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

COPY . .

RUN chmod +x /app/entrypoint.sh

EXPOSE 3333

ENTRYPOINT ["sh", "/app/entrypoint.sh"]
