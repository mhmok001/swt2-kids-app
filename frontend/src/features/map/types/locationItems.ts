import { Address, ContactInfomation, Event } from "./event.types";

type OrganisationType = 'Facility' | 'private' | 'Sportclub';

export interface Organisation {
    id: string;
    name: string;
    description?: string;
    coverImgageURL: string;
    LogoImgageURL?: string;
    galarieImageURLs?: Array<string>;
    address: Address;
    contactInformation: ContactInfomation;
    openingHours?: Array<OpeningHour>;
    offers?: Array<Event>;
}

export interface OpeningHour {
    dayOfWeek: string;
    openTime: string;
    closeTime: string;
    isClosed: boolean;
}

export const LOCATION_ITEMS: Array<Organisation> = [{
    id: '1',
    name: 'Stadtbibliothek Herne-Mitte',
    description: 'Die Stadtbibliothek bietet ein attraktives Angebot von mehr als 200.000 unterschiedlichen Medien, die Sie mit einem gültigen Benutzerausweis entleihen können. Selbstverständlich können Sie die Stadtbibliothek auch ohne Benutzerausweis vor Ort nutzen! Hier finden Sie alle Informationen rund um das Anmelden, Ausleihen, Verlängern und Bestellen von Medien sowie Ihrem Benutzerkonto.',
    coverImgageURL: 'https://www.herne.de/Bilder/Kultur-und-Freizeit/Stadtbibliothek/startseite_header_Beitragsbild.png',
    address: {
        street: 'Karl-Brandt-Weg',
        houseNumber: '7',
        zipCode: 44629,
        city: 'Herne',
        coordinates: {
            latitude: 51.5508082301178,
            longitude: 7.2103555671340835,
        },
    },
    contactInformation: {
        mail: 'stadtbibliothek@herne.de',
        phone: '02323 162801',
        website: 'https://www.herne.de/Kultur-und-Freizeit/Kulturelle-Bildung/Stadtbibliothek/'
    },
    openingHours: [
        {
            dayOfWeek: 'Montag',
            openTime: '10:00',
            closeTime: '19:00',
            isClosed: false
        },
        {
            dayOfWeek: 'Dienstag',
            openTime: '10:00',
            closeTime: '19:00',
            isClosed: false
        },
        {
            dayOfWeek: 'Mittwoch',
            openTime: '',
            closeTime: '',
            isClosed: true
        },
        {
            dayOfWeek: 'Donnerstag',
            openTime: '10:00',
            closeTime: '19:00',
            isClosed: false
        },
        {
            dayOfWeek: 'Freitag',
            openTime: '10:00',
            closeTime: '19:00',
            isClosed: false
        },
        {
            dayOfWeek: 'Samstag',
            openTime: '10:00',
            closeTime: '13:00',
            isClosed: false
        },
        {
            dayOfWeek: 'Sonntag',
            openTime: '',
            closeTime: '',
            isClosed: true
        },
    ],
}]