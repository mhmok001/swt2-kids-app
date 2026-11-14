import React from 'react';
import { Search, X } from 'lucide-react';
import styles from './SearchBar.module.scss';
import { Input } from '@/src/core/components/ui/Input/Input';
import { Button } from 'react-bootstrap';

export interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onBlur: () => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder,
  onChange,
  onClear,
  onBlur
}) => {
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onClear();
  };

  return (
    <div className={styles.searchBar}>
      <Input
        value={value}
        onChange={handleInputChange}
        onBlur={onBlur}
        placeholder={placeholder}
        leftIcon={<Search className={styles.searchIcon} />}
        rightIcon={
          value && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className={styles.clearButton}
            >
              <X className={styles.clearIcon} color='white' strokeWidth={3}/>
            </Button>
          )
        }
      />
    </div>
  );
};
