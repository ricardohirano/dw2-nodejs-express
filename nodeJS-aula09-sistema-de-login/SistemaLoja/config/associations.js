// este arquico ira crirar as associaçoes entre as tabelas
import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

const associations = () => {
   // um cliente possui muitos pedidos (hasmany)
    Cliente.hasMany(Pedido, { foreignKey: "cliente_id"})
    // Um pedido possui um cliente (belongsTo)
    Pedido.belongsTo(Cliente, {foreignKey: "cliente_id"})

};
export default associations; 
