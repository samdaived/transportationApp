import axios from 'axios';
import { toast } from 'react-toastify';
import { flattenObjAndObjectInArray } from '../utils/flatternObject';

export const FetchData = async (query: string): Promise<any | null> => {
  try {
    const res = await axios.post(process.env.REACT_APP_API_URL || '', {
      query,
      //   operationName: `Submit${formName}`,
    });
    let resData = res?.data?.data;

    if (Array.isArray(res.data.errors)) {
      toast.error('error');
      return null;
    }
    const data = flattenObjAndObjectInArray(resData, {});
    return data;
  } catch (er) {
    toast.error('faild to fetch the ');
    return null;
  }
};
