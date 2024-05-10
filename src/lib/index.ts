export function getId({ url }: { url: string | undefined }) {
    if (url === undefined) throw new Error('An error occurred');

    const id: string[] = url.split('/watch?v=');

    if (id === null || id[0] !== 'https://www.youtube.com') {
        throw new Error('User is not on YT currently');
    }

    return id[1];
}