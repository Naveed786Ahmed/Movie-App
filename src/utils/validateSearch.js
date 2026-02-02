
export const validateSearch = (query) => {

    if (!query || query.trim().length === 0) {
        return { isValid: false, message: "Search field cannot be empty. Please enter a movie title." };
    }

    if (query.length < 3) {
        return { isValid: false, message: "Search term is too short. Please enter at least 3 characters." };
    }

    if (query.length > 50) {
        return { isValid: false, message: "Search term is too long. Please limit your search to 50 characters." };
    }

    // Allows letters, numbers, spaces, and common movie title punctuations
    const regex = /^[a-zA-Z0-9\s?&!':-]+$/;
    if (!regex.test(query)) {
        return { isValid: false, message: "Search contains unsupported special characters." };
    }

    return { isValid: true, message: "" };
}
