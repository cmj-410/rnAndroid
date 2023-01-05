import axios from "axios";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiIyMjkzMTc5NTk4QHFxLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiU0cifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLWdra3FQMkZSMjREajNmVXd1QW9RRmdMUCJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiYXV0aDB8NjM4ZjQyODMxNDNhMWRmNDEzOThkZTBmIiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcyODg1NDQ1LCJleHAiOjE2NzM0OTAyNDUsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.2AIQyHruG5UbXJ0cplMQ35XN-Ifkw5k0hjO9t78NCP_7FBzKfNDX-N-gz72wXpde8ekvC5ZDo7C2V4-4EJlQsgMJmPWT4cV2qMCSB12sow9K7slvoPRpT8i8yiGalwBWu2K0jUF6uCcIJeD3mzqAvfNb2JU_p5Z7zOI3nF8rTjAL8rySuUMCXJJOldW39hrTUp1MlwD_yeJyQxqBvk9FXjlbZjR262UvcruzOqH7E0S1cpoG_rFgJVJzQZUXlEkHdYwZS3IBqgKWQOaDU3pEGzbbvp6t0z-RoKZx-lp9-Bs_9pKc12hHGzJe_vzRyz17XZ6YJ3NYBHc9IBjY32gdAw";
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
