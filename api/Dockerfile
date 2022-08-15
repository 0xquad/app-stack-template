FROM python:3-alpine
ARG PORT
ENV PORT ${PORT:-80}
RUN pip install -U pip && pip install flask
RUN adduser -DHh /app app
WORKDIR /app
COPY . /app
USER app
CMD flask run -h :: -p ${PORT}
