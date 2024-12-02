import { getConnection } from "../database/connection.js";
import sql from "mssql";

export const getProductos = async (req, res) => {
  const { idsede } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("idsede", idsede)
    .execute("sp_mostrarproductoporsede");
  const productos = result.recordset.map((producto) => {
    if (producto.Foto) {
      producto.Foto = Buffer.from(producto.Foto).toString("base64");
    }
    return producto;
  });

  res.json(productos);
};
