import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const createUser = async (userData) => {
    console.log("createUser", userData);
    try {
        const response = await api.post("/users", userData);
        console.log("response", response);
    } catch (error) {
        console.error("Error creating user", error);
    }
};