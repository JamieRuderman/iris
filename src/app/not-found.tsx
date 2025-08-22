import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-light text-gray-600 mb-8">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors uppercase tracking-wide text-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}