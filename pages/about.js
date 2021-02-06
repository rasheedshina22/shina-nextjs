import Link from 'next/link';
import Meta from '../components/Meta';

export default function about() {
  return (
    <div>
      <Meta title="About" />
      <h5 style={{ marginBottom: '5rem' }}>Added More Meta tags</h5>
      <Link href="/">Go back</Link>
    </div>
  );
}
