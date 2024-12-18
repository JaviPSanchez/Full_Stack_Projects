# Project Description

## 01: Project Description

This project build a Backend for a recipe APP with the following features:

1. TDD with Django Test Framework using unittest library
2. Token Authentification
3. Django Admin Interface
4. Django REST Framework
5. Postgres
6. Swagger for API documentation
7. Flake8 and Black for linting and formatting
8. Docker
9. CI/CD GitHub Actions
10. Deployment to GCP

## 02: Future Updates

1. Terraform
2. Poetry
3. Social Auth
4. MFA
5. Deployment to AWS
6. UI

## 03: Local Development Usage

1. **Build, Run & Stop containers**

   ```bash
   docker compose up --build
   ```

   ```bash
   docker compose down
   ```

   ```bash
   docker compose down --volumes
   ```

2. **Run flake8**

   ```bash
   docker compose run --rm app sh -c "flake8"
   ```

3. **Run Black**

   ```bash
   docker compose run --rm app sh -c "black app"
   ```

4. **Create Django Project**

   ```bash
   docker compose run --rm app sh -c "django-admin startproject src ."
   ```

5. **Create New App**

   ```bash
   docker compose run --rm app sh -c "python manage.py startapp core"
   ```

6. **Django Run Test**

   ```bash
   docker compose run --rm app sh -c "python manage.py test"
   ```

7. **Create and Apply Migrations**

   ```bash
   docker compose run --rm app sh -c "python manage.py makemigrations"
   ```

   ```bash
   docker compose run --rm app sh -c "python manage.py wait_for_db && python manage.py migrate"
   ```

8. **Create Superuser**

   ```bash
   docker compose run --rm app sh -c "python manage.py createsuperuser"
   ```

9. **Run Docker Production**

   ```bash
   docker compose -f docker-compose-production.yml up
   ```

   ```bash
   docker compose -f docker-compose-production.yml build app
   ```

   ```bash
   docker compose -f docker-compose-production.yml up --no-deps -d app
   ```

   ```bash
   docker compose -f docker-compose-production.yml run --rm app sh -c "python manage.py createsuperuser"
   ```

   ```bash
   docker compose -f docker-compose-production.yml logs
   ```

10. **Install Docker on Ubuntu**

    ```bash
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc
    ```

    ```bash
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    ```

    ```bash
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```

    ```bash
    systemctl status docker.service
    systemctl start docker-service
    ```

    ```bash
    sudo usermod -aG docker USER
    sudo apt install docker-compose
    ```
