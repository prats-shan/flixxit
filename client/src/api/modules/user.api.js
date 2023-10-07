import privateUser from "../client/private.client";
import publicUser from "../client/public.client";

const userEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  receiveInfo : "user/info",
  PasswordUpgrade: "user/update-password"
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      console.log("send request");
      const response = await publicUser.post(
        userEndpoints.signin,
        { username, password }
      );

      return { response };
    } catch (err) { console.log("err"); return { err }; }
  },
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicUser.post(
        userEndpoints.signup,
        { username, password, confirmPassword, displayName }
      );

      return { response };
    } catch (err) { return { err }; }
  },
  receiveInfo : async () => {
    try {
      const response = await privateUser.get(userEndpoints.receiveInfo );

      return { response };
    } catch (err) { return { err }; }
  },
  PasswordUpgrade: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateUser.put(
        userEndpoints.PasswordUpgrade,
        { password, newPassword, confirmNewPassword }
      );

      return { response };
    } catch (err) { return { err }; }
  }
};

export default userApi;