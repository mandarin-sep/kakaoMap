import { useLayoutEffect, useMemo } from "react";
import { useMap } from "../hooks/useMap";
import { PlaceType } from "./mapTypes";

interface MapMarkerProps {
  place: PlaceType;
}

const Mapmarker = (props: MapMarkerProps) => {
  const map = useMap();
  const marker = useMemo(() => {
    const marker = new kakao.maps.Marker({
      position: props.place.position,
    });

    return marker;
  }, []);

  useLayoutEffect(() => {
    marker.setMap(map);

    return () => {
      marker.setMap(null);
    };
  }, [map]);

  return <></>;
};

export default Mapmarker;
