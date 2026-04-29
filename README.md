# Inicializar backend Express
cd apps/api
npm init -y
npm install express cors dotenv morgan
npm install prisma @prisma/client
npm install -D nodemon

# Para hacer la build del docker

docker compose up --build

http://localhost

http://localhost:4000/api/health

# Para la db

docker exec -it airbnbcrm_postgres psql -U admin -d airbnbcrm

y dentro 

SELECT 1;