# Get the server code running on NodeJS container

## Copy and paste Jujhar's server

https://gist.github.com/jujhars13/e978bae3ead9d066d0da07119a26b10f

## Build your image locally

An example of the final Dockerfile is [in this repo](Dockerfile).

```sh
docker build -t '<tag-of-our-choice>' .
```

To test locally

```sh
docker run -p 8080:8080 <tag-of-our-choice>
```

## To update to Docker hub

Sign up to hub.docker.com

Create a repository
  A. Repositories
  B. Create repository

Tag your local image with the same name as your remote repo. eg:

```sh
docker tag '<tag-of-our-choice>' <your-user-name>/<image-name>:tagname
```

```sh
docker push <your-user-name>/<image-name>:tagname
```
