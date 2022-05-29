import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAME, STOP_ID } from '../../constants/stopKeys';
import { RootState } from '../../state/rootReducer';
import Select from 'react-select';
import {
  chooseValue,
  CustomOption,
  onSelectedValue,
  Placeholder,
  UseOptionLoader,
} from './searchHelper';
import { StopDispatch } from '../../state/stop/actions';

const Search: React.FC = () => {
  const [inuputValue, setValue] = useState('');
  const { currentStop } = useSelector((state: RootState) => state.stop);
  const dispatch = useDispatch<StopDispatch>();
  const { options, loading } = UseOptionLoader(inuputValue);

  return (
    <Select
      options={options}
      onInputChange={(v) => setValue(v)}
      onChange={(v) => onSelectedValue(v, dispatch)}
      isClearable={true}
      isMulti={false}
      styles={{
        menu: (state) => ({ ...state, zIndex: 401, borderRadius: '20px' }),
        control: (state) => ({ ...state, borderRadius: '20px' }),
      }}
      getOptionLabel={(v) => chooseValue(v, NAME)}
      getOptionValue={(v) => chooseValue(v, STOP_ID)}
      value={currentStop.gtfsId ? currentStop : null}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Option: CustomOption,
      }}
      isLoading={loading}
      placeholder={Placeholder}
      inputValue={inuputValue}
    />
  );
};

export default Search;
