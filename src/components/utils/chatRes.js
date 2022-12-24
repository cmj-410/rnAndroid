import axios from "axios";

const token = "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";
const config = {
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const data = {
  model: "text-davinci-003",
  prompt: "",
  max_tokens: 2048,
  temperature: 0.9,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.6,
};

export const apiChat = (msg) => {
  return axios.post("/chatApi/completions", { ...data, prompt: msg }, config);
};

export default apiChat;
