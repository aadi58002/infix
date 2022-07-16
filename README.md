# Infix

Run as:
```bash
# Terminal 1 (DB)
docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -it postgres

# Terminal 2 (Backend)
diesel migration run --database-url postgresql://postgres:mysecretpassword@localhost:5432
cd backend && cargo run

# Terminal 3 (Frontend)
cd frontend && npm run dev
```
