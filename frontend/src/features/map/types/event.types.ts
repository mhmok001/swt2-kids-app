import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

type AgeGroup = {
    minAge: number;
    maxAge: number;
    description?: string;
}

type CostInformation = {
    price: number;
    priceInformation?: string; 
}
export interface Event {
    id: string;
    title: string;
    description: string;
    categoryId: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    address: Address;
    price?: CostInformation;
    organizer?: string;
    autor?: string;
    contactInformation?: ContactInfomation;
    locationName: string;
    ageGroups: Array<AgeGroup>
}

export interface EventCategory {
    id: string;
    name: string;
    icon: IconName;
    color: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Address {
    street: string;
    houseNumber: string;
    zipCode: number;
    city: string;
    coordinates: Coordinates;
}

export interface ContactInfomation {
    mail: string;
    phone?: string;
    website?: string;
}


export interface SelectEventIdProp {
    onSelectEventId: (id: string | null) => void;
}

export interface SelectEventIdProps {
    selectedEventId: string | null;
    onSelectEventId: (id: string | null) => void;
}