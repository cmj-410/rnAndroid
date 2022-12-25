import axios from "axios";
import * as md5 from "md5";

const config = {
  timeout: 10000,
  headers: {
    "Content-Type": `application/x-www-form-urlencoded`,
  },
};

const data = {
  from: "",
  to: "",
  q: "",
  appid: "20210526000842911",
  sign: "",
  salt: "android410",
};

const secret = "QfoECi788AQog4Q0_k48";

function produce(appid, content, salt, secret) {
  return md5(appid + content + salt + secret);
}

export const apiChat = (query) => {
  data.from = query.from;
  data.to = query.to;
  data.q = query.content;
  data.sign = produce(data.appid, data.q, data.salt, secret);
  return axios.post("/baidutrans", data, config);
};

export default apiChat;
