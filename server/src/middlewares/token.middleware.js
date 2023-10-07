import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import userModel from "../models/user.model.js";

const tokenclarification = (req) => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jsonwebtoken.verify(
        token,
        process.env.TOKEN_SECRET
      );
    }

    return false;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  const tokenclarification = tokenclarification(req);

  if (!tokenclarification) return responseHandler.unacceptable(res);

  const user = await userModel.findById(tokenclarification.data);

  if (!user) return responseHandler.unacceptable(res);

  req.user = user;

  next();
};

export default { auth, tokenclarification};