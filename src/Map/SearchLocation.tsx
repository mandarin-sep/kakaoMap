import styled from "@emotion/styled";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useMap } from "../hooks/useMap";
import { PlaceType } from "./mapTypes";

interface SearchLocationprops {
  onUpdatePlaces: (places: PlaceType[]) => void;
}

const SearchLocation = (props: SearchLocationprops) => {
  const map = useMap();
  const [keyword, setKeyword] = useState("");
  const [placeList, setPlaceList] = useState<PlaceType[]>([]);
  const placeService = useRef<kakao.maps.services.Places | null>(null);

  const searchPlaces = (keyword: string) => {
    if (!keyword.replace(/^\s+|\s$/g, "")) {
      alert("키워드를 입력하세요!");
      return;
    }

    if (!placeService.current) {
      alert("placeService 에러");
      return;
    }

    placeService.current.keywordSearch(keyword, (data, status) => {
      const { kakao } = window;

      if (status === kakao.maps.services.Status.OK) {
        const placesInfos = data.map((info) => {
          return {
            id: info.id,
            position: new kakao.maps.LatLng(Number(info.y), Number(info.x)),
            title: info.place_name,
            address: info.address_name,
          };
        });
        props.onUpdatePlaces(placesInfos);
        setPlaceList(placesInfos);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과 없음");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("오류가 발생");
        return;
      }
    });
  };

  useEffect(() => {
    if (placeService.current) {
      return;
    }

    placeService.current = new kakao.maps.services.Places();
  }, []);

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPlaces(keyword);
  };

  const handleItemClick = (place: PlaceType) => {
    map.setCenter(place.position);
    map.setLevel(4);
  };

  return (
    <Container>
      <Form onSubmit={handlesubmit}>
        <Input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </Form>
      <List>
        {placeList.map((item, index) => (
          <Item key={item.id} onClick={() => handleItemClick(item)}>
            <label>{`${index + 1}. ${item.title}`}</label>
            <span>{item.address}</span>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  opacity: 0.8;
  overflow-y: auto;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  position: sticky;
  top: 0;
`;

const Input = styled.input`
  width: 100%;
  min-width: 200px;
  padding: 8px;
  border: 1px solid #c0c0c0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-bottom: 1px dashed #d2d2d2;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
    opacity: 1;
    trasition: background-color 0s;
  }
`;

export default SearchLocation;
