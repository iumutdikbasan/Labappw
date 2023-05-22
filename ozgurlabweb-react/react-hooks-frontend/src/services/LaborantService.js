import axios from 'axios'

const LABORANT_BASE_REST_API_URL = 'http://localhost:8090/api/v1/laborants';

class LaborantService{
    
    getAllLaborants(){
        return axios.get(LABORANT_BASE_REST_API_URL)
    }

    createLaborant(laborant){
        return axios.post(LABORANT_BASE_REST_API_URL, laborant)
    }
    getLaborantById(laborantId){
        return axios.get(LABORANT_BASE_REST_API_URL+'/'+laborantId)
    }
    updateLaborant(laborantId, laborant){
        return axios.put(LABORANT_BASE_REST_API_URL+'/'+laborantId, laborant);
    }
    deleteLaborant(laborantId){
        return axios.delete(LABORANT_BASE_REST_API_URL+'/'+laborantId)
    }
}

export default new LaborantService();