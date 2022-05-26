import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { FetchData } from '../../services/appService';
import { allQueries } from '../../services/queries';
import { CustomOption } from './searchOption';

const Search: React.FC = () => {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const loadOptions = () => {
    return FetchData(allQueries.searchQuery(inputValue)).then(
      (res) => res?.stops
    );
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      onChange={(value) => setSelectedValue(value)}
      onInputChange={(v: string) => setValue(v)}
      value={selectedValue}
      isClearable={true}
      components={{
        Option: CustomOption,
        DropdownIndicator: () => null,
        // IndicatorSeparator: () => null,
      }}
      placeholder={'Search'}
    />
  );
};

export default Search;
