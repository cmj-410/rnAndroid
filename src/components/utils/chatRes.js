import axios from "axios";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiIyMjkzMTc5NTk4QHFxLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiVFcifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLWdra3FQMkZSMjREajNmVXd1QW9RRmdMUCJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiYXV0aDB8NjM4ZjQyODMxNDNhMWRmNDEzOThkZTBmIiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcxNTM4Nzg2LCJleHAiOjE2NzIxNDM1ODYsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.Q6rAwYBqn-c8pReR0_oZf4zj0BJdE9lqoXRLcp7AwSZkZXJXqT2c3MoK6AaHi5YPjY6-rPtHF2cW40kq-x75cznuQjciASIo3OLKRn0fEOxWJ26gOzlr97tI-RR1O1hY4Q-Au02_hfxoowRLvO4U_4or8vNxMGoo7xZNMt3PV4t_IavjuD1Db8yB9Sr5qB69-5URhZA7EmOIHS6KNdgdkRxtqAn_QyJz9NTd_cy8OPUIU8knEw6vAelzem6CYMexlb-eHPbnWneIpmXegAIuHTnln4QkCZNFzQvZSjWdFRBt-J4HOE7aErKyDCLm1Ck2KB0bhEMBOby0eLPDKaUoPg";
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
