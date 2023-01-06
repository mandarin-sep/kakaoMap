import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { KakaoMapContext } from "../hooks/useMap";

interface DynamicMapProps {
  children: ReactNode;
}

const DynamicMap = (props: DynamicMapProps) => {
  const [map, setMap] = useState<kakao.maps.Map>();
  const KaKaoMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!KaKaoMapRef.current) {
      return;
    }

    //지도를 생성하는 코드
    setMap(
      new kakao.maps.Map(KaKaoMapRef.current, {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      })
    );
  }, []);
  return (
    <>
      <Container>
        <Map ref={KaKaoMapRef} />
      </Container>
      {map ? (
        <KakaoMapContext.Provider value={map}>
          {props.children}
        </KakaoMapContext.Provider>
      ) : (
        <div>지도 정보를 가져오는데 실패했습니다.</div>
      )}
    </>
  );
};

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Map = styled.div`
  position: static;
  width: 100%;
  height: 100%;
`;

export default DynamicMap;
