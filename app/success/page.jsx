import Link from 'next/link';

export default function Success({ children }) {
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-md border border-blue-200">
        <h1 className="text-3xl font-extrabold text-green-800 mb-4">
          Payment Successful
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase! An email confirmation has been sent to{' '}
          <span className="text-purple-700 font-medium block">client@email.com</span>
        </p>
        <p className="text-blue-600 text-lg font-semibold mb-4">
          <Link className="text-blue-600 hover:underline" href="/products">
            Return to the Store
          </Link>
        </p>
        <p className="text-gray-500 text-sm">
          Need further assistance? Contact our support team at{' '}
          <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
            support@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
