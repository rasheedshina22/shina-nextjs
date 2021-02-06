import Link from 'next/link';

export default function about() {
  return (
    <div style={{ marginBottom: '5rem' }}>
      <h5> this is the about page</h5>
      <Link href="/">Go back</Link>
    </div>
  );
}
