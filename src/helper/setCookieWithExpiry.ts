import Cookies from 'universal-cookie';

export const setCookieWithExpiry = (
    name: string,
    value: string | number | boolean | object,
    maxAge: number = 900 // 15 minutos em segundos
) => {
    const cookies = new Cookies();

    cookies.set(name, value, {
      maxAge,
      path: '/',
      sameSite: 'strict'
    });
  };