import axios from "axios";

// export const publicApi = axios.create({
//   baseURL: "http://3.36.169.209:8080",
// });

// export const privateApi = axios.create({
//   baseURL: "http://3.36.169.209:8080",
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//   },
// });

// function postRefreshToken(id) {
//   const response = publicApi.post(`/member/${id}/refresh`, {
//     Authorization: localStorage.getItem("refresh_token"),
//   });
//   return response;
// }

// privateApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");
//   config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

// privateApi.interceptors.response.use(
//   (response) => {
//     return response;
//   },

//   async (error) => {
//     const {
//       config,
//       response: { status },
//     } = error;

//     if (status === 401) {
//       if (error.response.data.message === "Unauthorized") {
//         const originRequest = config;
//         try {
//           const tokenResponse = await postRefreshToken();
//           if (tokenResponse.status === 201) {
//             const newAccessToken = tokenResponse.data.token;
//             localStorage.setItem("access_token", tokenResponse.data.token);
//             localStorage.setItem(
//               "refresh_token",
//               tokenResponse.data.refreshToken
//             );
//             axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
//             originRequest.hreaders.Authorization = `Bearer ${newAccessToken}`;

//             return axios(originRequest);
//           }
//         } catch (error) {
//           if (axios.isAxiosError(error)) {
//             if (
//               error.response?.status === 404 ||
//               error.response?.status === 422
//             ) {
//               console.log("if");
//               window.location.replace("/login");
//             } else {
//               console.log("else");
//             }
//           }
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

async function refreshAccessToken(memberId) {
  const refreshToken = localStorage.getItem("refresh_token");

  try {
    const response = await axios.get(
      `http://3.36.169.209:8080/member/${memberId}/refresh`,
      {
        headers: { Authorization: `Bearer ${refreshToken}` },
      }
    );

    localStorage.setItem("access_token", response.data.accessToken);
    localStorage.setItem("refresh_token", response.data.refreshToken);
  } catch (error) {
    console.log(error);
  }
}

export default refreshAccessToken;
