FROM python:3-alpine
ARG PORT
ENV PORT ${PORT:-80}
RUN pip install -U pip && pip install flask flask_cors
RUN adduser -DHh /app app
WORKDIR /app
COPY . /app
USER app
CMD exec /usr/local/bin/flask run -h :: -p ${PORT}
