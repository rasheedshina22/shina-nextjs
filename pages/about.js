import Link from 'next/link';

export default function about() {
  return (
    <div style={{ marginBottom: '5rem' }}>
      this is the about page
      <Link href="/">Go back</Link>
    </div>
  );
}
