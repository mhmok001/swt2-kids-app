export type FormattedDateObject = {
    readonly date: string;
    readonly time: string;
};

/**
 * Formats a date string into German date and time formats.
 * @param date - The date string to format.
 * @returns {FormattedDateObject}
 */
export const dateFormatter = (dateAsString: string): FormattedDateObject => {
    const date = new Date(dateAsString);
    const formattedDate = date.toLocaleDateString('de-DE');
    const formattedTime = date.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit'
    });
    return { date: formattedDate, time: formattedTime };
}
