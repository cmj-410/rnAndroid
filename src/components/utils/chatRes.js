import axios from "axios";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiIyMjkzMTc5NTk4QHFxLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiVFcifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLWdra3FQMkZSMjREajNmVXd1QW9RRmdMUCJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiYXV0aDB8NjM4ZjQyODMxNDNhMWRmNDEzOThkZTBmIiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcyMTQ1ODYxLCJleHAiOjE2NzI3NTA2NjEsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.ldGLY489JzSq_wOrRbTSPuIXIhlbgGbUxk4fslAJczkpr99Y9tX1U5z3zw3qKX9-lf6cwMJQRTgWfC3EG26v9RAKtwlUcbuH6Ib1EagzToK-4O_JXir3bzzekxudviBIn-mCH5i2oaDUtJGhK916jG61fjHhxR0keKyP6lIqhxBMjSH06FQ3FX5TZDYmW7YFt0zkEbk9njnvzG_NKh8k-aCVLCfKUXS8dt0h2S4XkRPd8Ndj1PrVlYuq-h_d5sraHNAw5dNKEcNLtv8Hv7tdSCNPCiPBOJVaBguaGPzakt4_g3NysTZIFmnPs0HZ3hL2tIEIPOTS9m3I-OrOPIg_ig";
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
