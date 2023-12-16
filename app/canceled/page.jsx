import Link from 'next/link';

export default function Cancel({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-extrabold text-red-600 mb-4">
          Transaction Canceled
        </h1>
        <p className="text-gray-700 mb-6">
          Unfortunately, the payment was declined. Please review your payment details and try again.
        </p>

        <p className="text-green-600 text-lg font-semibold hover:underline mb-4">
          <Link className="text-green-600 hover:underline" href="/products">
            Return to the Store
          </Link>
        </p>

        <p className="text-gray-500 text-sm">
          Need assistance? Contact our support team at{' '}
          <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
            support@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
