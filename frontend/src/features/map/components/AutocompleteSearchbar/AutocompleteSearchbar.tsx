import * as React from "react";
import styles from "./AutocompleteSearchbar.module.scss";
import { SearchBar } from "../../../../core/components/ui/SearchBar/SearchBar";

export type SearchOption = {
    readonly id: string | number;
    title: string;
    /**
     * The Search typ represt the content being seached for
     * default is title and description 
     */
    toSearch: string;
};

interface AutocompleteProps {
    value: string;
    onChange: (input: string) => void;
    searchOptions: Array<SearchOption>;
    onClickOptionItem: (id: string | number) => void;
    onClearId: () => void;
    onClearText: () => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
    searchOptions,
    onClickOptionItem,
    onClearId,
    onClearText,
    value,
    onChange,
}) => {
    const [open, setOpen] = React.useState(false);

    const filtered = searchOptions.filter(opt =>
        opt.toSearch.toLowerCase().includes(value.toLowerCase())
    );

    const handleClear = () => {
        onChange('');
        onClearId();
        onClearText();
        setOpen(false);
    };

    const handleBlur = () => setTimeout(() => setOpen(false), 100); // Damit Klick auf MenuItem noch zählt

    const handleOnChange = (input: string) => {
        if (input === '') {
            handleClear();
            return;
        }
        onChange(input);
        setOpen(true);
    }

    return (
        <div className={styles.autocompleteWrapper}>
            <SearchBar
                value={value}
                onChange={handleOnChange}
                onClear={handleClear}
                onBlur={handleBlur}
            />
            {open && filtered.length > 0 && (
                <div className={styles.menu}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                        }
                    }}
                >
                    {filtered.map((option, index) => (
                        <div
                            key={index}
                            className={styles.menuItem}
                            onMouseDown={() => {
                                onClickOptionItem(option.id);
                                onChange(option.title);
                                setOpen(false);
                            }}
                        >
                            {option.title}
                        </div>
                    ))}
                </div>
            )}
        </div >
    );
};
