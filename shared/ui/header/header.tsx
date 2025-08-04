import { RouteE } from '@/shared/routes';
import Link from 'next/link';

export function Header() {
    return (
        <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href={RouteE.ROOT}>
                    <span className="text-2xl font-semibold text-green-700 hover:text-green-900 transition">
                        MyApp
                    </span>
                </Link>
                <nav className="space-x-6 text-gray-700 font-medium">
                    <Link href={RouteE.TASKS}>
                        <span className="hover:text-green-700 transition">Tasks</span>
                    </Link>
                    <Link href={RouteE.USERS}>
                        <span className="hover:text-green-700 transition">Users</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
