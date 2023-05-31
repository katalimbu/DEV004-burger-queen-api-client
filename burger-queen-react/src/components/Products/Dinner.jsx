import "./dinner.css"

function Dinner (){
    return (
        <div>
        
        <div className="containerDinner"> 
        <h1>Hola mesero </h1>
        <label>
        Nombre del cliente: <input name="clientName" />
      </label>
        <div className ="containerItemsDinner">
            <h2> Resumen del pedido:</h2>
            <btn>Hamburguesa Simple $10 </btn>
            <btn>Hamburguesa Doble $15 </btn>
            <btn>Papas fritas $5 </btn>
            <btn>Aros de cebolla $5 </btn>
            <btn>Agua chica $5  </btn>
            <btn>Agua grande $7 </btn>
            <btn>Gaseosa chica $5 </btn>
            <btn>Gaseosa grande $7 </btn>
        </div>
        <div className="orderDinner">
        </div>
        <btn className= "OrderReadyForKitchen">Enviar a cocina</btn>
        </div>
        </div>
    )
    
}
export default Dinner