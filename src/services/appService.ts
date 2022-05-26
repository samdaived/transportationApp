import axios from 'axios';
import { toast } from 'react-toastify';

export const FetchData = async (
  query: string
): Promise<Partial<any> | null> => {
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
    return resData;
  } catch (er) {
    toast.error('error');
    return null;
  }
};
