import { AssessmentSubmissionStore } from "../AssessmentSubmissionStore";

const AssessmentSubmissionReducer = (state = [], action) => {
    switch(action.type) {
      case 'PURCHASE_COURSE':
        return AssessmentSubmissionStore(action.data);
      default:
        return state;
    }
  }
  export default AssessmentSubmissionReducer;