export type Phones = {
    key: number,
    number: string
}
export type Contact = {
    address?: string;
    phones: Phones[];
    email: string;
};
