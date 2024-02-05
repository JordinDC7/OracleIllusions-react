import axios from "axios";


const rockShowService = {
    endpoint: "https://oracleillusions.azurewebsites.net/api"
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


const rockShow = {getAll};
export default rockShow;