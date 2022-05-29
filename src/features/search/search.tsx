import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { NAME, STOP_ID } from '../../constants/stopKeys';
import { FetchData } from '../../services/appService';
import { allQueries } from '../../services/queries';
import { RootState } from '../../state/rootReducer';
import { getSetStopDetail, setStopInitial } from '../../state/stop/actions';
import { CustomOption, Placeholder } from './searchHelper';

const Search: React.FC = () => {
  const { currentStop } = useSelector((state: RootState) => state.stop);
  const dispatch = useDispatch();

  const loadOptions = (v: string) => {
    return FetchData(allQueries.searchQuery(v)).then((res) => res?.stops);
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      onChange={(v) => {
        if (!v) {
          dispatch(setStopInitial());
          return;
        }
        if (v instanceof Array) {
          return;
        }
        dispatch<any>(getSetStopDetail(v?.[STOP_ID]));
      }}
      // onInputChange={(v) => setValue(v)}
      isClearable={true}
      isMulti={false}
      styles={{
        menu: (state) => ({ ...state, zIndex: 401, borderRadius: '20px' }),
        control: (state) => ({ ...state, borderRadius: '20px' }),
      }}
      getOptionLabel={(v) => v?.[NAME] || ''}
      getOptionValue={(v) => v?.[STOP_ID] || ''}
      value={currentStop?.[STOP_ID] ? currentStop : null}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Option: CustomOption,
      }}
      placeholder={Placeholder}
    />
  );
};

export default Search;
