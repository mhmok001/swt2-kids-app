import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';
import styles from './NavigationSidebar.module.scss';
import { SelectedNavivationItem, ContentPanelView } from '../../types/navigation.types';
import { MAP_NAVIGATION_ITEMS } from '../../types/mapNavigationItems';
import CustomToolTip from '@/src/core/components/ui/CustomToolTip/CustomToolTip';
import { PanelLeft } from 'lucide-react';
import IconButton from '@/src/core/components/ui/IconButton/IconButton';
import NavgationSidebarItem from './NavigationItem/NavigationItem';

interface NavigationSidebarProps {
    isOpen: boolean;
    toggle: () => void;
    navigationItem: SelectedNavivationItem | null;
    openSidePanel: () => void;
    setNavigationItem: (item: SelectedNavivationItem) => void;
}

export default function NavigationSidebar({
    isOpen,
    setNavigationItem: selectedItem,
    navigationItem: selectedNavigationItem,
    openSidePanel,
    toggle: close
}: NavigationSidebarProps) {

    const handleOnClick = (index: number, label: ContentPanelView) => {
        selectedItem({ index: index, label: label });
        openSidePanel();
    };

    return (
        <Collapsible.Root
            open={isOpen}
            onOpenChange={close}
            className={styles.navSidebar}
            defaultOpen
        >
            {/* Header mit Toggle */}
            <header className={styles.navHeader}>
                <div className={styles.navToggle}>
                    <div className={styles.navBrand}>
                        {isOpen && (
                            <span className={styles.navTitle}>
                                Kids-App Karte
                            </span>
                        )}
                        {!isOpen ?
                            <CustomToolTip label={'Erweitern'} trigger={
                                <Collapsible.Trigger asChild>
                                    <IconButton
                                        enabledHover
                                        icon={PanelLeft}
                                    />
                                </Collapsible.Trigger>
                            }
                            >
                            </CustomToolTip>
                            :
                            <Collapsible.Trigger asChild>
                                <IconButton
                                    enabledHover
                                    icon={PanelLeft}
                                />
                            </Collapsible.Trigger>
                        }
                    </div>
                </div>
            </header>
            {/* Menu Items */}
            <Collapsible.Content forceMount className={styles.navContent}>
                {MAP_NAVIGATION_ITEMS.map((item, index) => (
                    <NavgationSidebarItem
                        key={index}
                        item={item}
                        isToggle={isOpen}
                        isActive={selectedNavigationItem !== null && selectedNavigationItem.index === index}
                        onClick={() => handleOnClick(index, item.label)}
                    />
                ))}
            </Collapsible.Content>
        </Collapsible.Root >
    );
}