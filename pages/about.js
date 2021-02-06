import Link from 'next/link';
import Meta from '../components/Meta';

export default function about() {
  return (
    <div>
      <Meta title="About" />
      <h5 style={{ marginBottom: '5rem' }}>
        Finished the tutorial. let's build something awesome
      </h5>
      <Link href="/">Go back</Link>
    </div>
  );
}
