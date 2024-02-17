import axios from "axios";


const rockShowService = {
    endpoint: "https://localhost:7286/api"
}

//const prodString =  "https://oracleillusions.azurewebsites.net/api";
//const devString = "https://localhost:7286/api";

const getAll = () => {
    const config = {
        method: "GET",
        url: `${rockShowService.endpoint}/RockShow`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
    };
    return axios(config);
}
const addRock = (payload) => {
    const config ={
        method: "POST",
        url: `${rockShowService.endpoint}/RockShow`,
        data: payload,
        withCredentials: true,
        crossdomain:true,
        headers: { "Content-type": "application/json"}
    }
    return axios(config);
}

const rockShow = {getAll, addRock};
export default rockShow;