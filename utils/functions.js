import {uuid} from "uuidv4";
import moment from "moment";

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

export function getValidationCode(code) {
    const regex = /^[a-zA-Z0-9]{1,20}$/;

    return regex.test(code);
}

export function getDate(date, format) {
    return moment(date).format(format);
}
