export function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-white mt-12">
            <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500 select-none">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}