import PurchaseService from "./services/PurchaseService"


export const PurchaseStore = (data) =>{
   
    return PurchaseService.savePurchaseCourse(data);
}