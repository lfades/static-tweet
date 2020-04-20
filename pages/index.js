import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Welcome to static-tweet!</h1>
      <p>To continue, add a tweet id to the URL, for example:</p>
      <ul>
        <li>
          <Link href="[tweet]" as="/1241041962871881728">
            <a>/1241041962871881728</a>
          </Link>
        </li>
        <li>
          <Link href="[tweet]" as="/1238918791947522049">
            <a>/1238918791947522049</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        div {
          padding: 1.5rem 3rem;
        }
        p {
          padding: 1rem 0;
        }
        ul {
          margin-left: 2.5rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
