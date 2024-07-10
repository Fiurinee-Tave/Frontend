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

// async function refreshAccessToken(memberId) {
//   const refreshToken = localStorage.getItem("refresh_token");

//   try {
//     const response = await axios.get(
//       `https://emotionfeedback.site/member/${memberId}/refresh`,
//       {
//         headers: { Authorization: `Bearer ${refreshToken}` },
//       }
//     );

//     localStorage.setItem("access_token", response.data.accessToken);
//     localStorage.setItem("refresh_token", response.data.refreshToken);
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default refreshAccessToken;

// async function refreshAccessToken(memberId, callback) {
//   const refreshToken = localStorage.getItem("refresh_token");

//   try {
//     const response = await axios.get(
//       `https://emotionfeedback.site/member/${memberId}/refresh`,
//       {
//         headers: { Authorization: `Bearer ${refreshToken}` },
//       }
//     );

//     localStorage.setItem("access_token", response.data.accessToken);
//     localStorage.setItem("refresh_token", response.data.refreshToken);

//     // 새 토큰을 받은 후 콜백 함수 실행
//     if (callback && typeof callback === "function") {
//       callback();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default refreshAccessToken;

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://emotionfeedback.site", // 기본 URL 설정
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 access token을 헤더에 추가
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const memberId = localStorage.getItem("memberId");

    // 401 에러가 발생했을 경우
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // refresh token을 사용해 access token을 재발급 받기
        console.log("access token 재발급");
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          `https://emotionfeedback.site/member/${memberId}/refresh`,
          {
            token: refreshToken,
          }
        );

        if (response.status === 200) {
          // 새로운 access token 저장
          const newAccessToken = response.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);

          // 원래 요청에 새로운 access token을 설정
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // 재시도
          return api(originalRequest);
        }
      } catch (refreshError) {
        // refresh token 갱신 실패 시, 사용자 로그아웃 처리 등
        console.error("Refresh token failed", refreshError);
        // 로그아웃 로직 추가
      }
    }

    return Promise.reject(error);
  }
);

export default api;
