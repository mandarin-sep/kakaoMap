import { CSSProperties, useEffect, useRef } from "react";
import styled from "@emotion/styled";

const DynamicMap = () => {
  const KaKaoMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!KaKaoMapRef.current) {
      return;
    }

    //지도를 생성하는 코드
    new window.kakao.maps.Map(KaKaoMapRef.current, {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    });
  }, []);
  return (
    <Container>
      <Map ref={KaKaoMapRef} />
    </Container>
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
