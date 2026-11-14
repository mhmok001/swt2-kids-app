"use client";
import * as React from "react";
import OpenStreetViewMap from "@/src/features/map/components/OpenStreetViewMap/OpenStreetViewMap";
import NavigationSidebar from "@/src/features/map/components/NavigationSidebar/NavigationSidebar";
import ContentPanel from "@/src/features/map/components/Panels/ContentPanel/ContentPanel";
import styles from './page.module.scss';
import DetailsPanel from "@/src/features/map/components/Panels/DetailsPanel/DetailsPanel";
import { useMapSidebars } from "@/src/features/map/hooks/useMapSidebars";
import { EVENT_ITEMS } from "@/src/features/map/types/eventItems";

export default function MapPage() {
  const {
    isNavigationSidebarOpen,
    isSidebarPanelOpen,
    selectedNavigationItem,
    selectedEventId,
    sidebarView,
    detailsPanel,
    handleOpenSidePanel,
    setNavigationItem,
    toggleNavigationSidebar,
    toggleSidebarPanel,
    toggleDetailsSidebarPanel,
    setEventId,
    handleSetSidebarView,
    handleSetDetailPanelView
  } = useMapSidebars();
  //toDo: fetch on API
  const selectedEventById = EVENT_ITEMS.find(e => e.id === selectedEventId);

  console.log(detailsPanel);
  return (
    <div className={styles.mapPage}>
      <aside className={styles.navigationContainer}>
        <div className={styles.navigation}>
          <NavigationSidebar
            isOpen={isNavigationSidebarOpen}
            toggle={toggleNavigationSidebar}
            navigationItem={selectedNavigationItem}
            setNavigationItem={setNavigationItem}
            openSidePanel={handleOpenSidePanel}
          />
          <ContentPanel
            selectedContent={selectedNavigationItem}
            selectedDetail={handleSetDetailPanelView}
            isOpen={isSidebarPanelOpen}
            onOpenChange={toggleSidebarPanel}
            onSelectEventId={setEventId}
            selectedEventId={selectedEventId}
          />
          <DetailsPanel
            isOpen={selectedEventId !== null}
            selectedDetailPanel={detailsPanel}
            isNavigationSidebarOpen={isNavigationSidebarOpen}
            item={selectedEventById}
            onOpenChange={toggleDetailsSidebarPanel}
          />
        </div>
      </aside>
      <main className={styles.mainContainer}>
        <OpenStreetViewMap
          selectedEventId={selectedEventId}
          markers={EVENT_ITEMS}
          onSelectEventId={setEventId}
        />
      </main>
    </div>
  );
}
