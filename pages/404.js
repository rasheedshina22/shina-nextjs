import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ marginBottom: '5rem' }}>
      <h1>This page does not exist</h1>
      <Link href="/">Go back</Link>
    </div>
  );
}
