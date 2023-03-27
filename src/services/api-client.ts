import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b4cc277f24ee480e9c2fb9e51a4d8ebe",
	},
});
