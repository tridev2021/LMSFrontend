import axios from 'axios';

const Assessment_API_BASE_URL = "http://localhost:8085/api/questionUpload";

class AssessmentSubmissionService {

    saveAboutUs(data){
        return axios.post(Assessment_API_BASE_URL, data);
    }
}

export default new AssessmentSubmissionService()