import express from "express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"
import empleadoRoutes from "./routes/empleados.routes.js";
import clienteRoutes from "./routes/clientes.routes.js";
import productoRoutes from "./routes/productos.routes.js";

const app = express();

app.set("port", 5000)

app.use(express.json());

app.use(cors());

app.use("/api/categorias", categoriaRoutes);
app.use("/api/empleados", empleadoRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/productos", productoRoutes);

export default app;