import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import featureFlagsDataServiceCall from "./data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  const [enableFeatureFlags, setEnableFeatureFlags] = useState({});

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await featureFlagsDataServiceCall();
      console.log(data);
      setEnableFeatureFlags(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{ loading, enableFeatureFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
