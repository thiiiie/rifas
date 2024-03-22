export type METHODS = "GET" | "POST" | "PUT" | "DELETE";

interface IFetchClient extends RequestInit {
  url: string;
  method?: METHODS;
  body?: any;
}

export async function fetchClient<T>({
  url,
  method,
  body,
  ...rest
}: IFetchClient): Promise<T> {
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/api${url}`;

  const response = await fetch(fullUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...rest
  });

  const data = response.json();

  return data;
}