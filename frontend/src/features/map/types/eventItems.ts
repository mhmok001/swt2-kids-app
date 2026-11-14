import { Event } from './event.types';

export const EVENT_ITEMS: Array<Event> = [
    {
        id: '1',
        title: 'Herkules - Reise in die Steinzeit',
        description: 'Hast du Lust auf eine Reise in die Steinzeit? \n In der Ur- und Frühgeschichte des Museums begegnen wir den Skeletten von einem Riesenhirsch und einem Höhlenbären, bestaunen Mammutknochen und Feuersteine und lernen unseren jüngsten Zuwachs kennen - ein Babymammut! Aber wir erfahren auch, wie die Menschen in der Steinzeit, der frühesten Epoche unserer Geschichte, gelebt haben, wie sie auf die Jagd gingen und wie sie ihre Erfolge in Höhlenmalereien verewigten',
        categoryId: '1',
        startDate: '2025-08-02T10:00:00.000+02:00',
        endDate: '2025-08-02T12:00:00.000+02:00',
        imageUrl: 'https://img.destination.one/remote/.jpg?mode=crop&scale=both&width=640&height=360&url=https%3A%2F%2Fdam.destination.one%2F3206298%2F1ee9af631338c38f0dfa74c0070d657adf738353a9a6b7845aef5bcd36a7fdcf%2Fdas-herkules-festival.png',
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
        price: {
            price: 0,
            priceInformation: 'Kostenloses Angebot'
        },
        organizer: 'Stadtbibliothek Herne',
        autor: 'Stadt Herne',
        contactInformation: {
            mail: 'info@jks-herne.de',
            phone: '02325 51 515',
            website: 'herne.de'
        },
        locationName: 'Stadtbibliothek Herne',
        ageGroups: [{ minAge: 3, maxAge: 6, }]
    },
    {
        id: '2',
        title: 'Vorlesen: Schlumpfige Minutengeschichten',
        description: 'Lesung für Kinder ab 6 Jahren Das besondere Vorlesebuch für Weitreisende und Daheimbleiber, für Im-Stau-Steher, Oma-Opa-Urlauber, Gipfelstürmer, Wasserfreunde und alle, die sich (schon jetzt) auf die vielleicht schönsten Wochen des Jahres freuen!.',
        categoryId: '1',
        startDate: '2025-07-10T17:00:00.000+02:00',
        endDate: '2025-07-10T18:00:00.000+02:00',
        imageUrl: 'https://www.guterstart.nrw.de/images/angebote/76/123065/logo/vorlesen_Herne_Mitte.jpg',
        address: {
            street: 'Willi-Pohlmann-Platz',
            houseNumber: '1',
            zipCode: 44623,
            city: 'Herne',
            coordinates: {
                latitude: 51.53566902365251,
                longitude: 7.223376213482366,
            },
        },
        organizer: 'Stadt Herne',
        autor: 'Kulturbüro der Stadt Herne',
        locationName: 'Stadtbibliothek Herne',
        ageGroups: [{ minAge: 3, maxAge: 6, }]
    },
    {
        id: '3',
        title: 'Feriencamp Archäologie',
        description: 'Sommercamp Archäologie – Abenteuerferien vor der Haustür Im Sommercamp Archäologie erleben Kinder von 8 bis 12 Jahren zwei spannende Tage als kleine Archäolog:innen. Mit Schaufel und Pinsel gehen sie auf Schatzsuche: Ob steinzeitliche Werkzeuge, römische Keramik oder Spuren aus dem Mittelalter – jedes Fundstück erzählt eine Geschichte. Nach der Ausgrabung wird ausprobiert, wie die Menschen früher lebten: Die Kinder bearbeiten Leder, formen Ton und kochen am offenen Feuer. So wird Geschichte lebendig – zum Mitmachen und Anfassen!',
        categoryId: '3',
        startDate: '2025-07-24T09:00:00.000+02:00',
        endDate: '2025-07-25T12:00:00.000+02:00',
        imageUrl: 'https://img.destination.one/remote/.jpg?mode=crop&scale=both&width=640&height=360&url=https%3A%2F%2Fdam.destination.one%2F3279358%2Fc5926af6e0d2ef20be502eddd497157053840929c565f4b7457cbb1d96620feb%2Flwl-mak-herne-png.png',
        address: {
            street: 'Europaplatz',
            houseNumber: '1',
            zipCode: 44653,
            city: 'Herne',
            coordinates: {
                latitude: 51.53611651183566,
                longitude: 7.225601398137536,
            },
        },
        price: { price: 25.00 },
        organizer: 'Stadtmarketing Herne GmbH',
        autor: 'Marie Jakob',
        locationName: 'LWL-Museum für Archäologie und Kultur',
        ageGroups: [{ minAge: 3, maxAge: 6, }, { minAge: 6, maxAge: 16 }]
    },
    {
        id: '4',
        title: 'Kindertheater "Hans im Glück" - Daniel Wagner/Zitadelle Puppet Company',
        description: 'Hans bekommt von seinem Meister einen riesigen Batzen Gold als Lohn für seine treuen Dienste. Er zieht ein Tüchlein hervor, wickelt den Klumpen ein, setzt sich ihn auf die Schulter und macht sich auf den Weg nach Haus. Er geht so dahin und setzt ein Bein vors andere. Seine Mutter und sein Vater erwarten ihn freudig. So beginnt das Märchen ... Was Hans auf seinem Weg erlebt, wen er trifft und wie viel Glück er nach Hause bringt, davon handelt dieses Theaterstück. Mit wunderbaren Puppen von Ralf Wagner und Mechtild Nienaber erzählt Daniel Wagner dieses Märchen in seiner unverwechselbar komödiantischen und dennoch tiefsinnigen Art.',
        categoryId: '2',
        startDate: '2025-07-10T10:00:00.000+02:00',
        endDate: '2025-07-10T12:00:00.000+02:00',
        imageUrl: 'https://img.destination.one/remote/.jpg?mode=crop&scale=both&width=1280&height=720&url=https%3A%2F%2Fdam.destination.one%2F3087826%2Fa55cefe0c334e8ec772c123a95ee439b84ba45d0fee79eeb28456474a695c260%2Fhans-im-gl-ck-jpg.jpg&focuspoint=0.0,0.0',
        address: {
            street: 'Unser-Fritz-Straße',
            houseNumber: '108',
            zipCode: 44653,
            city: 'Herne',
            coordinates: {
                latitude: 51.543096905139,
                longitude: 7.144015784647201,
            },
        },
        organizer: 'Heimatmuseum Unser Fritz',
        autor: 'Heimatmuseum Unser Fritz',
        contactInformation: {
            mail: 'emschertal-museum@herne.de',
            phone: '02325 75255',
            website: 'herne.de'
        },
        locationName: 'Heimatmuseum Unser Fritz',
        ageGroups: [{ minAge: 3, maxAge: 6, }, { minAge: 6, maxAge: 16 }]
    },
    {
        id: '5',
        title: 'Maker Day',
        description: 'Hans bekommt von seinem Meister einen riesigen Batzen Gold als Lohn für seine treuen Dienste. Er zieht ein Tüchlein hervor, wickelt den Klumpen ein, setzt sich ihn auf die Schulter und macht sich auf den Weg nach Haus. Er geht so dahin und setzt ein Bein vors andere. Seine Mutter und sein Vater erwarten ihn freudig. So beginnt das Märchen ... Was Hans auf seinem Weg erlebt, wen er trifft und wie viel Glück er nach Hause bringt, davon handelt dieses Theaterstück. Mit wunderbaren Puppen von Ralf Wagner und Mechtild Nienaber erzählt Daniel Wagner dieses Märchen in seiner unverwechselbar komödiantischen und dennoch tiefsinnigen Art.',
        categoryId: '3',
        startDate: '2025-07-10T10:00:00.000+02:00',
        endDate: '2025-07-10T12:00:00.000+02:00',
        imageUrl: 'https://img.destination.one/remote/.jpg?mode=crop&scale=both&width=1280&height=720&url=https%3A%2F%2Fdam.destination.one%2F1943165%2F0cf216bf26e3fe190b291687f43f924c10316b1b84aa8830ce8d4e9a01f16410%2Fmaker-day-stadtbibliothek-herne-mitte.png&focuspoint=0.0,0.0',
        address: {
            street: 'Willi-Pohlmann-Platz',
            houseNumber: '1',
            zipCode: 44623,
            city: 'Herne',
            coordinates: {
                latitude: 51.53566902365251,
                longitude: 7.223376213482366,
            },
        },
        organizer: 'Stadtbibliothek Herne-Mitte',
        locationName: 'Stadtbibliothek Herne-Mitte',
        ageGroups: [{ minAge: 3, maxAge: 6, }, { minAge: 6, maxAge: 16 }]
    },
    {
        id: '6',
        title: 'Kindertheater "Endlich Sonntag" - Herbert & Mimi. Clownstheater',
        description: 'Hans bekommt von seinem Meister einen riesigen Batzen Gold als Lohn für seine treuen Dienste. Er zieht ein Tüchlein hervor, wickelt den Klumpen ein, setzt sich ihn auf die Schulter und macht sich auf den Weg nach Haus. Er geht so dahin und setzt ein Bein vors andere. Seine Mutter und sein Vater erwarten ihn freudig. So beginnt das Märchen ... Was Hans auf seinem Weg erlebt, wen er trifft und wie viel Glück er nach Hause bringt, davon handelt dieses Theaterstück. Mit wunderbaren Puppen von Ralf Wagner und Mechtild Nienaber erzählt Daniel Wagner dieses Märchen in seiner unverwechselbar komödiantischen und dennoch tiefsinnigen Art.',
        categoryId: '2',
        startDate: '2025-07-10T10:00:00.000+02:00',
        endDate: '2025-07-10T12:00:00.000+02:00',
        imageUrl: 'https://img.destination.one/remote/.jpg?mode=crop&scale=both&width=1280&height=720&url=https%3A%2F%2Fdam.destination.one%2F3087855%2F4fc8473da75bd332799d10998b934ecf5910450703629b7a69a95318a02182ec%2Fendlich-sonntag-jpg.jpg&focuspoint=0.0,0.0',
        address: {
            street: 'Unser-Fritz-Straße',
            houseNumber: '108',
            zipCode: 44653,
            city: 'Herne',
            coordinates: {
                latitude: 51.543096905139,
                longitude: 7.144015784647201,
            },
        },
        organizer: 'Heimatmuseum Unser Fritz',
        locationName: 'Heimatmuseum Unser Fritz',
        ageGroups: [{ minAge: 3, maxAge: 6, }, { minAge: 6, maxAge: 16 }]
    },
    {
        id: '7',
        title: 'Workshop Graffiti für Anfänger',
        description: 'Ab 12 Jahren Du wolltest schon immer mal zur Sprühdose greifen und dein eigenes Mural kreieren? Du wolltest schon immer mal deine eigenen Graffiti-Schriftzüge entwickeln? Dann komm in diesen Workshop und lerne die Basics des Graffiti kennen. Anmeldung unter: info@jks-herne.de 02325 - 51515',
        categoryId: '3',
        startDate: '2025-08-02T10:00:00.000+02:00',
        endDate: '2025-08-02T12:00:00.000+02:00',
        imageUrl: 'https://img.destination.one/remote/.jpg?mode=crop&scale=both&width=640&height=360&url=https%3A%2F%2Fdam.destination.one%2F1436263%2Fdd7394b6d498034a476e87a3b2015de45321f0a71a74e39c7c4437f4fca0f2d9%2Fjugendkunstschule-herne-e-v.png',
        address: {
            street: 'Dorstener Straße',
            houseNumber: '476',
            zipCode: 44653,
            city: 'Herne',
            coordinates: {
                latitude: 51.54507924473137,
                longitude: 7.159495555811859,
            },
        },
        price: { price: 27.00, priceInformation: 'Inklusive Materialkosten' },
        autor: 'Jugendkunstschule Herne e.V',
        organizer: 'Stadt Herne',
        locationName: ' Kunsthaus Crange',
        ageGroups: [{ minAge: 12, maxAge: 16, }]
    },
];