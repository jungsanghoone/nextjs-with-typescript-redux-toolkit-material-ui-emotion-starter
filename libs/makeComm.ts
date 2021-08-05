interface Header {
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
}
export function makeHeader(Author: string): Header {
  let requestheader: Header = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (Author !== undefined && Author !== null) {
    requestheader = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `esignon ${Author}`,
      },
    };
  }
  return requestheader;
}
