export const getAgeColor = (age: number) => {
    if (age < 18) {
        return 'bg-[color:var(--green-1)] text-[color:var(--green-9)]';
    } else if (age < 30) {
        return 'bg-[color:var(--green-2)] text-[color:var(--green-10)]';
    } else if (age < 50) {
        return 'bg-[color:var(--green-3)] text-[color:var(--green-11)]';
    } else {
        return 'bg-[color:var(--green-4)] text-[color:var(--green-12)]';
    }
}; 