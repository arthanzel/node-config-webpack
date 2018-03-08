const DEFAULT_NAMESPACE = "CONFIG";
const RECURSE_LIMIT = 50;

export default function collapseObject(obj = {}, prefix = DEFAULT_NAMESPACE, recurseLimit = RECURSE_LIMIT) {
    if (recurseLimit === 0) {
        throw new Error("node-config-webpack: Reached recursion limit!");
    }

    // Object that stores the flattened config
    let flattened = {};

    // keys() lists only enumerable and own properties, which is what we want.
    // getOwnPropertyNames lists non-enumerable as well, which is uncool.
    // for ... in lists things in the prototype, which is also uncool.
    const keys = Object.keys(obj);
    keys.forEach((key) => {
        let flatKey;
        if (Array.isArray(obj)) {
            flatKey = prefix + "(" + key + ")";
        }
        else {
            if (prefix) {
                flatKey = prefix + "." + key;
            }
            else {
                // Prevent leading '.' if prefix is blank
                flatKey = key;
            }
        }

        const val = obj[key];
        if (isArray(val) || isObject(val)) {
            flattened[flatKey] = collapseObject(val, "", recurseLimit - 1);
            // flattened = Object.assign(flattened, collapseObject(val, flatKey, recurseLimit - 1));
        }
        else {
            flattened[flatKey] = JSON.stringify(val);
        }
    });

    return flattened;
};

function isArray(obj) {
    return Array.isArray(obj);
}

function isObject(obj) {
    return typeof obj === "object" && obj !== null;
}

function collapseArray(array, prefix, recurseLimit) {
    if (recurseLimit === 0) {
        throw new Error("config-webpack: Reached recursion limit!");
    }

    let fields = {};

    for (const i in array) {
        const val = array[i];
        const key = prefix + "[" + i + "]";
        if (Array.isArray(val)) {
            fields = Object.assign(fields, collapseArray(val, key, recurseLimit - 1));
        }
        else if (typeof val === "object" && val !== null) {
            fields = Object.assign(fields, collapseObject(val, key, recurseLimit - 1));
        }
        else {
            fields[key]
        }
    }
}
