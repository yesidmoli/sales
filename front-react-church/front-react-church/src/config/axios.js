import axios from "axios"

const Axios = axios.create({
    // baseURL:'https://church-proyect-81649de0d516.herokuapp.com/'
    baseURL:'http://localhost:8000/'
});
export default Axios;