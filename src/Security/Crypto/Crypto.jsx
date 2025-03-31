var CryptoJS = require("crypto-js");

// Encrypt data
export function encryptData(data) {
    try {
        const ciphertext = CryptoJS.TripleDES.encrypt(JSON.stringify(data), process.env.REACT_APP_CRYPTO_SECRET_KEY)?.toString();
        return ciphertext;
    } catch (error) {
        console.error("Encryption error:", error);
        throw error;
    }
}

export function decryptData(ciphertext) {
    try {
        if (!ciphertext) {
            throw new Error("Ciphertext is empty or undefined.");
        }

        const fixedCiphertext = ciphertext.replace(/ /g, "+");

        const bytes = CryptoJS.TripleDES.decrypt(fixedCiphertext, process.env.REACT_APP_CRYPTO_SECRET_KEY);
        if (!bytes?.sigBytes) {
            return "Invalid id"
        }
        const originalData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        return originalData;
    } catch (error) {
        return "Invalid id"
    }
}

