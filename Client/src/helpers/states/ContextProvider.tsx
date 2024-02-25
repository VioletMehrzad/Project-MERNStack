import { type FC, type ReactNode, useState } from 'react';
import context from './context';

const ContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <context.Provider value={{ showPassword, setShowPassword }}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
