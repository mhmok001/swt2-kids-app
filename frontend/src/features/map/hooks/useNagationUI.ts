// import { useState, useCallback } from "react";
// import { NavigationUIState, SidebarView } from "../types/navigation.types";

// export const useNavigationUI = () => {
//   const [uiState, setUIState] = useState<NavigationUIState>({
//     currentView: 'search',
//     selectedLocation: null,
//     isDirectionsPanelOpen: false,
//     previousView: null,
//   });

//   // View wechseln mit History-Support
//   const switchToView = useCallback((newView: SidebarView, location?: Location) => {
//     setUIState(prev => ({
//       ...prev,
//       previousView: prev.currentView,
//       currentView: newView,
//       selectedLocation: location || null,
//       isDirectionsPanelOpen: newView === 'directions',
//     }));
//   }, []);

//   // Zurück zur vorherigen View
//   const goBack = useCallback(() => {
//     setUIState(prev => ({
//       ...prev,
//       currentView: prev.previousView || 'search',
//       previousView: null,
//       selectedLocation: prev.currentView === 'location-details' ? null : prev.selectedLocation,
//       isDirectionsPanelOpen: prev.previousView === 'directions',
//     }));
//   }, []);

//   // DirectionsPanel öffnen (von LocationList aus)
//   const openDirections = useCallback((from: Location, to: Location) => {
//     switchToView('directions');
//     // Trigger navigation calculation
//     return { from, to };
//   }, [switchToView]);

//   // Zurück zur Suche
//   const closeDirections = useCallback(() => {
//     switchToView('search');
//   }, [switchToView]);

//   return {
//     uiState,
//     switchToView,
//     goBack,
//     openDirections,
//     closeDirections,
//   };
// };