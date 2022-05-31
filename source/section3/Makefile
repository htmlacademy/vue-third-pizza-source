# Makefile for local development

start_project:
	docker-compose down -v
	docker-compose up --build

run_server:
	docker-compose down -v
	docker-compose up backend --build

run_tests:
	cd src/frontend; echo "...Starting frontend tests" && \
	npm run test:unit

run_server:
	docker-compose down -v
	docker-compose up backend
