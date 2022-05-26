import { components } from 'react-select';

export const CustomOption: React.FC = (props: any) => {
  const { Option } = components;

  return <Option {...props}>{console.log(props)}</Option>;
};
