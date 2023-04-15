import {uuid} from "uuidv4";

export function getUUID() {
    return uuid();
}

export function getValidationName(name) {
    const regex = /^[a-zA-Zа-яА-ЯёЁ]{2,20}$/;

    return regex.test(name);
}

export function getValidationEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
}

export function getValidationPassword(password) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;

    return regex.test(password);
}
