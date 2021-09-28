import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID befMn4u3X_qqTSxmIWswIXfliteHBpV4oxPrgUvsnEQ",
  },
});
