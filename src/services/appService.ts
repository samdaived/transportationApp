import axios from 'axios';
import { toast } from 'react-toastify';
import { IStopOption, IStopModel } from '../models/stop';
import { flattenObjAndObjectInArray } from '../utils/flatternObject';
import { allQueries } from './queries';

export const FetchStopsData = async (
  v: string
): Promise<IStopOption[] | null> => {
  try {
    const res = await axios.post(process.env.REACT_APP_API_URL || '', {
      query: allQueries.searchQuery(v),
    });

    if (Array.isArray(res.data.errors)) {
      toast.error('error');
      return null;
    }
    return res?.data?.data?.stops;
  } catch (er) {
    toast.error('faild to fetch');
    return null;
  }
};

export const FetchStopDetails = async (
  query: string
): Promise<IStopModel | null> => {
  try {
    const res = await axios.post(process.env.REACT_APP_API_URL || '', {
      query,
    });

    if (Array.isArray(res.data.errors)) {
      toast.error('error');
      return null;
    }
    return flattenObjAndObjectInArray(res?.data?.data.stop, {});
  } catch (er) {
    toast.error('faild to fetch');
    return null;
  }
};
