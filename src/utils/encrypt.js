import bycrypt from "react-native-bcrypt";
import isaac from "isaac";
import { secret } from "../config";
/**
 * 
 * This function encrypt the secret and info
 */

export const encryptData = () => {
    const salt2 = bycrypt.setRandomFallback((len) => {
        const buf = new Uint8Array(len);
    
        return buf.map(() => Math.floor(isaac.random() * 256));
    });
    
    const hash = bycrypt.hashSync(`${secret}`, salt2);

    return hash;
}