# Context

## Estado actual

Estamos creando un MVP tipo Airbnb con CRM interno.

El proyecto se está construyendo paso a paso para que pueda ser continuado por humanos, agentes IA o MCPs.

## Decisiones tomadas

- Monorepo simple.
- Backend en Express.
- Frontend en React + Vite.
- Lenguaje recomendado: TypeScript.
- Base de datos: PostgreSQL.
- ORM: Prisma.
- Infraestructura con Docker Compose.
- Nginx como reverse proxy.
- Carpeta `ai/` para documentación operativa del proyecto.

## Principios del proyecto

- MVP primero.
- Código simple antes que arquitectura compleja.
- Separación clara entre frontend, backend e infraestructura.
- Documentación pensada para agentes IA.
- Cada módulo debe poder evolucionar de forma independiente.

## Dominio inicial

Entidades principales:

- User
- Property
- Customer
- Booking
- AvailabilityBlock
- BookingNote

## Pendiente inmediato

- Inicializar backend Express.
- Inicializar frontend React.
- Configurar Docker.
- Configurar Prisma.
- Crear primer modelo de datos.


## Infra actual

Se ha añadido infraestructura Docker inicial.

Servicios:
- postgres
- api
- web
- nginx

Objetivo de esta fase:
Comprobar que frontend, backend, base de datos y proxy levantan correctamente usando Docker Compose.

Nginx expone:
- Frontend en `/`
- API en `/api/`

Comandos principales:
- `docker compose up --build`
- `docker compose down`
- `docker compose logs -f api`

## Hito alcanzado

Infraestructura validada:
Frontend + Backend + PostgreSQL + Docker + Nginx funcionando.

Próximo objetivo:
Conectar ORM Prisma y preparar autenticación.