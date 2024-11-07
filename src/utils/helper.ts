export const capitalizeTitle = (str: string): string => {
    const words = str.split(/[/-]/);

    const capitalizedWords = words
        .filter(word => word.trim() !== '')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return capitalizedWords.join(' ');
}

export const formatDate = (dateString: string): string => {
    const dateParts = dateString.split(" ");
    const day = dateParts[0];
    const month = dateParts[1];

    const monthMap: { [key: string]: string } = {
        Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
        Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
    };

    const formattedDate = `${day}/${monthMap[month]}`;
    return formattedDate;
};

export const isAuthenticated = () => {
    if (typeof window !== undefined) {
        return sessionStorage.getItem('token') !== null;
    }
};

export const getSessionToken = () => {
    return typeof window !== undefined ? sessionStorage.getItem('token') : null
}
