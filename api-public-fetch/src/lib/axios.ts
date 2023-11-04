import axios from "axios";

export const client = axios.create({
	baseURL: import.meta.env.VITE_APP_BASEURL,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`
	}
});

export const imgResponse = axios.create({
	baseURL: import.meta.env.VITE_APP_BASEURL,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`
	}
})