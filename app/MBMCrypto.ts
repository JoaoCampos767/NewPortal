export default class MbmCrypto {
    static passwordCrypto(value: string) {
        var cOutput = "";
        for (var i = 0; i < value.length; i++) {
            var stringCode = value.charCodeAt(i) + 20;
            var cLetra = String.fromCharCode(stringCode);
            cOutput += cLetra;
        }
        return cOutput;
    }

    static passwordDecrypto(value: string) {
        var cOutput = "";
        for (var i = 0; i < value.length; i++) {
            var stringCode = value.charCodeAt(i) - 20;
            var cLetra = String.fromCharCode(stringCode);
            cOutput += cLetra;
        }
        return cOutput;
    }

    static mbmEncrypt(value: string) {
        var cCripto: string = "";
        for (var i = 0; i < value.length; i++) {
            var stringCode = value.charCodeAt(i) + (15 + ((i + 1) % 10));
            var cLetra = String.fromCharCode(stringCode);
            if (cLetra == String.fromCharCode(39)) {
                cLetra = String.fromCharCode(40);
            }
            cCripto += cLetra;
        }
        return cCripto;
    }

    static mbmDecrypt(value: string) {
        var cCripto: string = "";
        for (var i = 0; i < value.length; i++) {
            var stringCode = value.charCodeAt(i) - (15 + ((i + 1) % 10));
            var cLetra = String.fromCharCode(stringCode);
            if (cLetra == String.fromCharCode(39)) {
                cLetra = String.fromCharCode(40);
            }
            cCripto += cLetra;
        }
        return cCripto;
    }

    static encryptV2 = (text: string, salt: string= 'no-salt') => {
        const textToChars = (tex: string) => tex.split("").map((c) => c.charCodeAt(0));
        const byteHex = (n: string) => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = (code: any) => textToChars(salt).reduce((a, b) => a ^ b, code);
        const encrypted = text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
        
        return Buffer.from(encrypted).toString("base64");
    };

    static decryptV2 = (encoded: string, salt: string = 'no-salt') => {
        const textToChars = (text: string) => text.split("").map((c) => c.charCodeAt(0));
        const applySaltToChar = (code: any) => textToChars(salt).reduce((a, b) => a ^ b, code);
        const text = Buffer.from(encoded, "base64").toString("ascii");
        if (text !== null && text?.match(/.{1,2}/g) !== null) {
            const match : any = text?.match(/.{1,2}/g);
            return match
                .map((hex : any) => parseInt(hex, 16))
                .map(applySaltToChar)
                .map((charCode : any) => String.fromCharCode(charCode))
                .join("");
        }
        throw new Error("Invalid base64 string!");
    };

    static encrypt(value: string) {
        var cCripto: string = "";
        for (var i = 0; i < value.length; i++) {
            var stringCode = value.charCodeAt(i) + (15 + ((i + 1) % 10));
            var cLetra = String.fromCharCode(stringCode);
            if (cLetra == String.fromCharCode(39)) {
                cLetra = String.fromCharCode(40);
            }
            cCripto += cLetra;
        }
        return this.encryptV2(cCripto);
    }

    static decrypt(value: string) {
        var cCripto: string = "";
        value = this.decryptV2(value);
        for (var i = 0; i < value.length; i++) {
            var stringCode = value.charCodeAt(i) - (15 + ((i + 1) % 10));
            var cLetra = String.fromCharCode(stringCode);
            if (cLetra == String.fromCharCode(39)) {
                cLetra = String.fromCharCode(40);
            }
            cCripto += cLetra;
        }
        return cCripto;
    }
}
