import { UserList } from '@/shared/ui';

export default function UsersPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[color:var(--green-12)] mb-2">
                    Users
                </h1>
                <p className="text-[color:var(--green-11)]">
                    Manage and view all users in the system
                </p>
            </div>
            <UserList />
        </div>
    );
}