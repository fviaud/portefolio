import axios from "axios";
const env = require(`../environments/${process.env.NODE_ENV}`);

export const apiUsers = axios.create({
  baseURL: env.apiGateway,
  withCredentials: true,
});

export const apiUsersMap = (u) => ({
  id: u._id,
  name: `${u.name.firstname} ${u.name.lastname} (${u.login.cuId})`,
  email: u.email,
  avatar: u.avatar,
});

export const getUsers = async () => {
  try {
    const response = await apiUsers.get("/users");
    return response.data.map(apiUsersMap);
  } catch (error) {}
};
