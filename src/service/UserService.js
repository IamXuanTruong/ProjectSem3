import * as http from '../common/http-common';
const urlAPI = "https://localhost:7195";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const GetUsers = async (id) => {
    try {
        const res = await http.get(`${urlAPI}/api/Users/${id}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const PostUsers = async (data) => {
    try {
        const res = await http.post(`${urlAPI}/api/Users`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const PutUsers = async (id, data) => {
    try {
        const res = await http.put(`${urlAPI}/api/Users/${id}`, data, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const DeleteUsers = async (id) => {
    try {
        const res = await http.deleteData(`${urlAPI}/api/Users/${id}`, config);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

