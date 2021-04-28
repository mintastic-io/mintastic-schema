import {Message} from "../message/message";

export function assertNotNull<T extends Message>(message: T, field: string): Promise<T> {
    return getFieldValue(message, field) ? Promise.resolve(message) : Promise.reject(`${field} must not be null`);
}

export function assertNull<T extends Message>(message: T, field: string): Promise<T> {
    return !getFieldValue(message, field) ? Promise.resolve(message) : Promise.reject(`${field} must be null`);
}

export function assertNotEmpty<T extends Message>(message: T, field: string): Promise<T> {
    const value = getFieldValue(message, field);
    if (!value || !value.length || value.length === 0)
        return Promise.reject(`${field} must not be empty`);
    return Promise.resolve(message);
}

export function assertNumeric<T extends Message>(message: T, field: string): Promise<T> {
    const value = getFieldValue(message, field);
    if (!value || !/^-?\d+(\.\d+)$/.test(value))
        return Promise.reject(`${field} is not numeric`);
    return Promise.resolve(message);
}

export function assertNotNegative<T extends Message>(message: T, field: string): Promise<T> {
    const value = getFieldValue(message, field);
    if (value < 0)
        return Promise.reject(`${field} is negative`);
    return Promise.resolve(message);
}

export function assertNotEquals<T extends Message>(message: T, field: string, compareWith: any): Promise<T> {
    const value = getFieldValue(message, field);
    if (value === compareWith)
        return Promise.reject(`${field} must not equal value ${compareWith}`);
    return Promise.resolve(message);
}

export function assertEquals<T extends Message>(message: T, field: string, compareWith: any): Promise<T> {
    const value = getFieldValue(message, field);
    if (value !== compareWith)
        return Promise.reject(`${field} must equal value ${compareWith}`);
    return Promise.resolve(message);
}

function getFieldValue(container, field) {
    const segments = field.split(".");
    let value = container;
    segments.forEach(segment => value = value[segment]);
    return value;
}