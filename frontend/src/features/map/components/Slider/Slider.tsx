import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, PropsWithChildren } from "react";
import { useSliderNavigation } from "../../hooks/useSliderNavigation";
import styles from "./Slider.module.scss";

type SilderStartMode = 'oneImage' | 'twoImage';

interface SliderProps extends PropsWithChildren {
    mode: SilderStartMode,
}

const Slider: React.FC<SliderProps> = ({
    mode,
    children,
}) => {
    const {
        viewportRef,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
    } = useSliderNavigation({
        align: "start",
        containScroll: "trimSnaps",
    });

    const slideStyle = [
        styles.slideStyle,
        mode === 'oneImage' && styles.oneMode,
        mode === 'twoImage' && styles.twoMode,
    ].filter(Boolean).join(' ');

    return (
        <div className={styles.container}>
            {canScrollPrev && (
                <button
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    style={{ position: "absolute", left: -21, top: "48%", zIndex: 1000 }}
                >
                    <ChevronLeft color="black" />
                </button>
            )}
            <div ref={viewportRef} className={styles.viewportStyle}>
                <div className={styles.container}>
                    {Children.map(children, (child, index) => (
                        <div className={slideStyle} key={index} >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            {canScrollNext && (
                <button
                    onClick={scrollNext}
                    style={{ position: "absolute", top: "48%", right: -14, zIndex: 1000 }}
                >
                    <ChevronRight color="black" />
                </button>
            )}
        </div>
    );
};

export default Slider;
