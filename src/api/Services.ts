import axios from 'axios';


const api = axios.create({
    baseURL: '../../data/db.json'
});

export const getListItem = async () => {
    try {
        const response = await api.get("")
        return response.data;
    } catch (error) {
        console.log(error);
    }
}