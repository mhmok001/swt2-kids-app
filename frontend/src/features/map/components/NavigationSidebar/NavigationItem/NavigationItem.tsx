import Button from '@/src/core/components/ui/Button/Button';
import styles from './NavigationItem.module.scss';
import CustomToolTip from '@/src/core/components/ui/CustomToolTip/CustomToolTip';
import { IsToggle, MapNavigationItem } from '../../../types/navigation.types';

interface NavgationSidebarItemProps extends IsToggle {
    item: MapNavigationItem;
    isActive: boolean;
    onClick: () => void;
}

const NavgationSidebarItem: React.FC<NavgationSidebarItemProps> = ({ 
    item, 
    isToggle, 
    isActive, 
    onClick 
}) => (
    <>
        {isToggle ?
                <div
                    tabIndex={isActive ? -1 : 0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onClick();
                        }
                    }}
                    className={isActive ? styles.navItemActive : styles.navItemInActive} onClick={onClick}
                >
                    <Button
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        variant={isToggle ? 'primary' : 'secondary'}
                        isActive={isActive}
                    />
                </div>
                :
                <CustomToolTip
                    label={item.label}
                    trigger={
                        <div
                            tabIndex={isActive ? -1 : 0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    onClick();
                                }
                            }}
                            className={isActive ? styles.navItemActive : styles.navItemInActive}
                            onClick={onClick}>
                            <Button
                                key={item.label}
                                label={item.label}
                                icon={item.icon}
                                variant={isToggle ? 'primary' : 'secondary'}
                                isActive={isActive}
                            />
                        </div>}
                />
        }
    </>
)

export default NavgationSidebarItem;