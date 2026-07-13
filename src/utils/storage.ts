export const Storage = {

    get(key: string) {

        if (typeof window === "undefined") return null;

        return localStorage.getItem(key);

    },

    set(key: string, value: string) {

        localStorage.setItem(key, value);

    },

    remove(key: string) {

        localStorage.removeItem(key);

    },

    clear() {

        localStorage.clear();

    }

};