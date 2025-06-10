import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState();

  try {
    const getLocation = async () => {
      const result = await Location.requestForegroundPermissionsAsync();
      if (!result.granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    };

    useEffect(() => {
      getLocation();
    }, []);
  } catch (error) {
    console.log("Error getting location:", error);
  }

  return location;
}
