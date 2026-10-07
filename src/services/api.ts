import axios from 'axios';
import { handleErrorResponse } from '../lib/utils';

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  // baseURL: 'http://localhost:8000/api',
  baseURL: 'https://www.ebfitness.co/api',
});

type GET = {
  endpoint: string;
  params?: { [key: string]: string | number | Array<number> };
  signal?: AbortSignal;
};

export const GET = async <T>({
  endpoint,
  params,
  signal,
}: GET): Promise<{ data: T | null; status: number }> => {
  try {
    const response = await api.get<T>(endpoint, {
      params,
      // withCredentials: true,
      ...(signal
        ? {
            signal,
          }
        : {}),
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    const axiosError = axios.isAxiosError(error);
    const statusCode = axiosError ? error?.response?.status : null;

    // const errorMessage = axiosError ? error.response?.data?.errors : null;

    return {
      data: null,
      status: statusCode ?? 500,
    };
  }
};

type POST = {
  endpoint: string;
  formData: FormData | Record<string, string | number>;
  isAuthorized?: boolean;
};

export const POST = async <T>({
  endpoint,
  formData,
}: // isAuthorized,
POST): Promise<{ data: T | null; error?: string; status: number }> => {
  try {
    const response = await api.post<T>(endpoint, formData, {
      withCredentials: true,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    const axiosError = axios.isAxiosError(error);
    const statusCode = axiosError ? error?.response?.status : null;
    let errorMessage: string | undefined;
    if (axiosError) {
      errorMessage = handleErrorResponse(error?.response?.data?.errors?.fields);
    }

    // if (statusCode === 401 && isAuthorized) {
    //     logout();
    //     toast.error('Your session has expired. Please log in again.');
    //   }

    return {
      data: null,
      error: errorMessage,
      status: statusCode ?? 500,
    };
  }
};
