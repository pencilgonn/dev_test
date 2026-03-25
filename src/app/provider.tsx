"use client";

import { ReactNode, useEffect, useState } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;

  return <>{children}</>;
};

export default AppProvider;
