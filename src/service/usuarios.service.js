
import jwt from "jwt-simple";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
 
export const generateRefreshToken = () => {
    return uuidv4();
}


export const generateAccessToken = (correo, refreshToken) => {
    const payload = {
        correo, 
        iat: moment().unix(),
        exp: moment().add(24, "hours").unix(),
      };

      return jwt.encode(
        payload,
        refreshToken
      );
 
}