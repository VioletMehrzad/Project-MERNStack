import { createContext } from 'react';

interface contextType {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const context = createContext<contextType>({
  showPassword: false,
  setShowPassword: () => true || false
});

export default context;
