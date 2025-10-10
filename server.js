import express from "express";
const app = express();
const port = 3000;

app.use(express.static("./")); // expõe seu index.html e assets

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
