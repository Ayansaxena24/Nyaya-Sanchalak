import axios from "../pages/api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", { withCredentials: true }); // send cookie (IMP)
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken }; // update accessToken
    });
    return response.data.accessToken; // return accessToken
  }
  return refresh;
};

export default useRefreshToken;
