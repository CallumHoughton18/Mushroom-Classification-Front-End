/**
 * @param unformattedName
 * @returns {string} a title, with - replaced with spaces, and each word capitalized
 */
export const toTitleCase = (unformattedName: string): string => {
    if (unformattedName == undefined) return "";

    const formattedName = unformattedName.replace(/-/g, " ");
    return formattedName
        .toLowerCase()
        .split(" ")
        .map((word) => {
            const firstLetter = word.charAt(0).toUpperCase();
            return firstLetter + word.slice(1);
        })
        .join(" ");
};
