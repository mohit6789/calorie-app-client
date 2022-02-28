import axios from "axios";
import storage from "./storage.service";
import { USER_TOKEN_KEY } from "../contants";

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "";

const http = axios.create();

function getBackendUrl(url: string) {
  return `${BASE_URL}/api/${url}`;
}

function getBackendHeaders(headers: any) {
  const accessToken = storage.getItem(USER_TOKEN_KEY);
  const authHeader = { "x-access-token": accessToken };
  return { ...authHeader, ...headers };
}

export function get(url: string, headers: any = {}, params: any = {}) {
  return http.get(getBackendUrl(url), {
    headers: getBackendHeaders(headers),
    ...params,
  });
}

export function post(url: string, data: any, headers: any = {}, params: any = {}) {
  return http.post(getBackendUrl(url), data, {
    headers: getBackendHeaders(headers),
    ...params,
  });
}

export function patch(url: string, data: any, headers: any = {}, params: any = {}) {
  return http.patch(getBackendUrl(url), data, {
    headers: getBackendHeaders(headers),
    ...params,
  });
}

export function remove(url: string, data: any, headers: any = {}, params: any = {}) {
  return http.delete(getBackendUrl(url), {
    headers: getBackendHeaders(headers),
    ...params,
  });
}