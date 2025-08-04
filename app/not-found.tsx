
import { RouteE } from '@/shared/routes';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12 text-gray-900 antialiased select-none">
            <h1 className="text-9xl font-extrabold text-green-600 mb-6">404</h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
                Page not found
            </p>
            <p className="text-gray-700 mb-8 max-w-md text-center">
                Sorry, but this page dont exist or it was removed
            </p>
            <Link
                href={RouteE.ROOT}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
                Go back to home
            </Link>
        </main>
    );
}
