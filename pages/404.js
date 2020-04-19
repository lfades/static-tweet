import Error from 'next/error';

export default function NotFound() {
  return <Error statusCode={404} title="This tweet could not be found"></Error>;
}
