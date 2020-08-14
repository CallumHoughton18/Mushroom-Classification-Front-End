export const toFormFieldTitle = (unformattedName: string): string => {
    if (unformattedName == undefined) return "";

    const formattedName = unformattedName.replace(/-/g, " ");
    console.log(formattedName);
    return formattedName
        .toLowerCase()
        .split(" ")
        .map((word) => {
            const firstLetter = word.charAt(0).toUpperCase();
            return firstLetter + word.slice(1);
        })
        .join(" ");
};
