import styles from './CustomToolTip.module.scss';
import { Tooltip } from "radix-ui";

declare const SIDE_OPTIONS: readonly ["top", "right", "bottom", "left"];
type Side = (typeof SIDE_OPTIONS)[number];

interface CustomToolTipProps {
    side?: Side;
    offset?: number;
    label: string;
    trigger: React.ReactNode;
}
const CustomToolTip: React.FC<CustomToolTipProps> = ({
    side = 'right',
    offset = -7,
    label,
    trigger,
}) => {

    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={2}>
                <Tooltip.Trigger asChild>
                {trigger}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                        <Tooltip.Content
                            className={styles.tooltipContent}
                            sideOffset={offset}
                            side={side}
                        >
                            {label}
                            <Tooltip.Arrow className={styles.tooltipArrow} />
                        </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

export default CustomToolTip;
