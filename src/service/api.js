const BASE_URL = "http://192.168.30.247:8080";

export const api = async (url, method, body = null, headers = {}) => {

  try {
    const endPoint = BASE_URL.concat(url);

    // const reqBody = body ? JSON.stringify(body) : null;

    // const fetchParams = { method, headers };

    // // if ((method === "POST" || method === "PUT") && !reqBody) {
    // //   throw new Error("Request body required");
    // // }

    // if (reqBody) {
    //   fetchParams.headers["Content-type"] = "application/json";
    //   fetchParams.body = reqBody;
    // }

    // const fetchPromise = fetch(endPoint, fetchParams);
    // console.log(fetchPromise);

    // const timeOutPromise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject("Request Timeout");
    //   }, 3000);
    // });

    // const response = await Promise.race([fetchPromise, timeOutPromise]);
    // console.log(response);

    const response = await fetch(endPoint)
    // const data = await response.json()
    const data = await Promise.race([response]);
    // console.log(data);

    return data;
  } catch (e) {
    return e;
  }
}

export const fetchAuthApi = async (url, method, body, statusCode, token = null, loader = false) => {
  try {
    const headers = {}
    const result = {
      token: null,
      success: false,
      responseBody: null
    };
    if (token) {
      headers["x-auth"] = token;
    }

    const response = await api(url, method, body, headers);

    if (response.status === statusCode) {
      // if (response.headers.get("x-auth")) {
      //   result.token = response.headers.get("x-auth");
      // }

      let responseBody;
      const responseText = await response.text();

      try {
        responseBody = JSON.parse(responseText);
      } catch (e) {
        responseBody = responseText;
      }
      if (responseBody.status === statusCode) {
        result.success = true;
      } else {
        result.success = false;
      }
      result.token = responseBody.access_token
      result.responseBody = responseBody;

      console.log("fetchAuthApi");
      console.log(result);
      return result;
    } else {
      let errorBody;
      const errorText = await response.text();

      try {
        errorBody = JSON.parse(errorText);
      } catch (e) {
        errorBody = errorText;
      }

      result.responseBody = errorBody;

      console.log("error fetchAuthApi");
      console.log(result);
      throw result;
    }
  } catch (error) {
    return error;
  }
}

export const fetchApi = async (url, method, body, statusCode, token = null, loader = false) => {
  try {
    const headers = {}
    const result = {
      success: false,
      responseBody: null
    };

    const response = await api(url, method, body, headers);

    if (response.status === statusCode) {
      let responseBody;
      const responseText = await response.text();

      try {
        responseBody = JSON.parse(responseText);
      } catch (e) {
        responseBody = responseText;
      }
      if (responseBody.status === statusCode) {
        result.success = true;
      } else {
        result.success = false;
      }
      result.responseBody = responseBody;

      console.log("fetchApi");
      console.log(result);
      return result;
    } else {
      let errorBody;
      const errorText = await response.text();

      try {
        errorBody = JSON.parse(errorText);
      } catch (e) {
        errorBody = errorText;
      }

      result.responseBody = errorBody;

      console.log("error fetchApi");
      console.log(result);
      throw result;
    }
  } catch (error) {
    return error;
  }
}