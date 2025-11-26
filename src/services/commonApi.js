import axios from "axios";

const commonApi = async (reqUrl, reqMethod, reqBody) => {
  const config = {
    url: reqUrl,
    method: reqMethod,
    data: reqBody

  }
  return await axios(config)

}

export default commonApi 
