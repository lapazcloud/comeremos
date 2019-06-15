FROM ruby:2.5 as ruby
WORKDIR /app
COPY . .
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
apt-get install -y nodejs && \
npm install && \
gem install bundler --no-document && \
bundle install && \
bundle exec middleman build

FROM nginx:alpine
COPY --from=ruby /app/build/ /usr/share/nginx/html