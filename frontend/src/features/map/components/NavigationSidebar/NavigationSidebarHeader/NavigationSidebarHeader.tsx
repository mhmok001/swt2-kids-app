import CustomToolTip from '@/src/core/components/ui/CustomToolTip/CustomToolTip';
import styles from './NavigationSidebarHeader.module.scss';
import IconButton from '@/src/core/components/ui/IconButton/IconButton';
import { Collapsible } from 'radix-ui';
import { PanelLeft } from 'lucide-react';

const NavigationSidebarHeader: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <>
        {isOpen && (
            <span className={styles.navTitle}>
                Kids-App
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
    </>
);

export default NavigationSidebarHeader;