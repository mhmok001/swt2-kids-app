import { useCallback, useState } from "react";
import { SelectedNavivationItem, ContentPanelView, DetailsPanelView } from "@/src/features/map/types/navigation.types";

/**
 * Custom React hook for managing the state and actions related to map sidebars.
 *
 * This hook encapsulates the logic for controlling the visibility and content of navigation and detail sidebars
 * within a map feature. It provides state variables and handler functions for toggling sidebars, selecting navigation items,
 * managing sidebar views, and handling event selection.
 *
 */
export const useMapSidebars = () => {
  const [isNavigationSidebarOpen, setIsNavigationSidebarOpen] = useState(true);
  const [isSidebarPanelOpen, setOpenSidePanelOpen] = useState(false);
  const [selectedNavigationItem, setSelectedNavigationItem] = useState<SelectedNavivationItem | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [contentPanel, setContentPanel] = useState<ContentPanelView | null>(null);
  const [detailsPanel, setDetailsPanel] = useState<DetailsPanelView | null>(null);

  const handleOpenSidePanel = useCallback(() => {
    setOpenSidePanelOpen(true);
  }, []);

  const setNavigationItem = useCallback((item: SelectedNavivationItem) => {
    toggleDetailsSidebarPanel(); // The sidebar is closed when the navigation is changed
    setSelectedNavigationItem(item);
  }, []);

  const handleSetContentPanelView = useCallback((sidebarView: ContentPanelView) => {
    setContentPanel(sidebarView);
  }, []);

  const handleSetDetailPanelView = useCallback((detailsPanelView: DetailsPanelView) => {
    setDetailsPanel(detailsPanelView);
  }, []);

  const toggleNavigationSidebar = useCallback(() => {
    setIsNavigationSidebarOpen((prev) => !prev);
  }, []);

  const toggleSidebarPanel = useCallback(() => {
    setOpenSidePanelOpen((prev) => {
      setSelectedNavigationItem(null);
      return !prev;
    });
  }, []);

  const toggleDetailsSidebarPanel = useCallback(() => {
    setSelectedEventId(null);
  }, []);

  const setEventId = useCallback((id: string | null) => {
    setSelectedEventId(id);
  }, []);

  const clearEventId = useCallback(() => {
    setSelectedEventId(null);
  }, []);

  return {
    // State
    isNavigationSidebarOpen,
    isSidebarPanelOpen,
    selectedNavigationItem,
    selectedEventId,
    sidebarView: contentPanel,
    detailsPanel,

    // Actions
    handleOpenSidePanel,
    setNavigationItem,
    handleSetSidebarView: handleSetContentPanelView,
    toggleNavigationSidebar,
    toggleSidebarPanel,
    toggleDetailsSidebarPanel,
    setEventId,
    clearEventId,
    handleSetDetailPanelView
  };
};