import { LucideIcon } from 'lucide-react';

export interface MapNavigationItem {
  icon: LucideIcon;
  label: ContentPanelView;
  action: 'search' | 'events' | 'filter' | 'layers' | 'settings';
  isActive?: boolean;
  badge?: number;
  shortcut?: string;
}

export interface MapNavigationState {
  isExpanded: boolean;
  activeAction?: string;
  searchQuery?: string;
  selectedFilters?: string[];
}

export interface IsToggle {
    isToggle: boolean;
}

export interface SelectedNavivationItem {
  index: number; 
  label: ContentPanelView | null;
}

export interface NavigationUIState {
  currentView: ContentPanelView;
  selectedLocation: Location | null;
  isDirectionsPanelOpen: boolean;
  previousView: ContentPanelView | null; // Für "Zurück" Navigation
}

export enum ContentPanelView {
  SEARCH = 'Suche',                         // Standard: Suchfeld + LocationList
  EVENT_GUIDE = 'Veranstaltungsführer',     // DirectionsPanel ist aktiv
  SETTINGS = 'Einstellung',                 // Navigation-Einstellungen
}

export enum DetailsPanelView {
  LOCATION = 'Orte',
  EVENT = 'Veranstaltung'
}