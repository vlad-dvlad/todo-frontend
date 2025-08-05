export const getStatusColor = (status: string) => {
    switch (status) {
        case 'DONE':
            return 'bg-[color:var(--green-3)] text-[color:var(--green-11)]';
        case 'IN_PROGRESS':
            return 'bg-[color:var(--green-2)] text-[color:var(--green-10)]';
        case 'TODO':
            return 'bg-[color:var(--green-1)] text-[color:var(--green-9)]';
        case 'REJECTED':
            return 'bg-[color:var(--green-4)] text-[color:var(--green-12)]';
        default:
            return 'bg-[color:var(--green-1)] text-[color:var(--green-8)]';
    }
};