
## Ideally some sort of build ID
DOCKER_TAG	?= latest
SERVICE 	= docker-workshop
PORT 		?= 8080

.EXPORT_ALL_VARIABLES: local build publish ecr-login register deploy pipeline
.PHONY: local build publish ecr-login register deploy pipeline

local:
	docker-compose up

build:
	docker-compose build

publish:
	docker-compose push
	

