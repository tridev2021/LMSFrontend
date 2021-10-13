import { PurchaseStore } from "../PurchaseStore";

const PurchaseReducer = (state = [], action) => {
    switch(action.type) {
      case 'PURCHASE_COURSE':
        return PurchaseStore(action.data);
      default:
        return state;
    }
  }
  export default PurchaseReducer;