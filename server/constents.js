module.exports = {
    // baseURL : "http://localhost:5000",
    // baseURL : "http://192.168.29.33:5000",
    // baseURL : "http://api.mevadakalgitea.scriptscholer.in",
    baseURL : "https://inventory-order-management-1-z6ss.onrender.com",
    
    DB_URL : "mongodb+srv://kanjiyaparas2002:0PsNjFPYg0dIBKEM@inventory-order-managem.75vwq.mongodb.net/",
    httpSuccess:"Success",
    httpErrors:{
        500:(() => {
          const err=  new Error("Somthing went wrong")
          err.status = 500
          return err
        })(),
        400:(() => {
            const err=  new Error("Missing dependency")
            err.status = 400
            return err
          })(),
        401:(() => {
            const err=  new Error("unAuthorized")
            err.status = 401
            return err
          })()
    },
    roles: ["admin", "distributor", "customer"],
    paymentStatus:['pending', "success", "reject"],
    orderStatus:["pending", "accept", "dispatch", "return"],
    deliveryStatus:["pending", "delivered", "canceled"],
    paymentMethod:["online", "cod"], 
    JWT_SACRATE:"SOMTHING SECRATE",
    
}
