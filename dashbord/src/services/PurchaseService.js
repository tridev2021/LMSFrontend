import axios from 'axios';

const PURCHASE_API_BASE_URL = "http://localhost:8085/api/purchase";

class PurchaseService {

    savePurchaseCourse(data){
        return axios.post(PURCHASE_API_BASE_URL, data);
    }
}

export default new PurchaseService()