
# Recipes API (Node.js + Express + Mongoose)

A minimal MVC CRUD API for managing recipes. Includes validation, error handling, and a Postman collection.

## Tech
- Node.js, Express.js
- MongoDB (Mongoose)
- Postman (docs/testing)

## Run locally
```bash
git clone <your-repo-url>
cd recipes-api
npm install
cp .env.example .env   # fill MONGO_URI
npm run dev
```
Server: `http://localhost:8080`

## Env
```
PORT=8080
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

## Endpoints
- `GET /api/recipes` — list (query: `?q=`)
- `POST /api/recipes` — create
- `GET /api/recipes/:id` — get by id
- `PUT /api/recipes/:id` — update
- `DELETE /api/recipes/:id` — delete

## Postman
Import `postman/RecipesAPI.postman_collection.json` and set the `baseUrl` variable.

## Deploy to Render
- Build: `npm install`
- Start: `npm start`
- Add env var `MONGO_URI` and optional `PORT`.

## Notes
- Do not include confidential company names.
- Open-source friendly.
