# React with TypeScript
* React
* Redux

[VIDEO redux-dynamic-modules](https://www.youtube.com/watch?v=SktRbSZ-4Tk)  
https://github.com/microsoft/redux-dynamic-modules/issues/118

## Docker
build docker image:  
`docker build -t image-frontend .`

run docker container:  
`docker run -d -p 80:80 --rm --name container-frontend image-frontend`

containers:  
`docker ps`

stop all containers:  
`docker kill $(docker ps -q)`

remove all containers:  
`docker rm $(docker ps -a -q) --force`

remove all images:  
`docker rmi $(docker images -q)`

prune images:
`docker image rune --force`
