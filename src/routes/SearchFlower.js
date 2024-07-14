import styled from "styled-components";
import Header from "../components/Header";
import IconSearch from "../icons/IconSearch";
import FlowerItem from "../items/FlowerItem";
import PageNumber from "../components/PageNumber";
import axios from "axios";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  gap: 50px;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
  }
`;

const SearchBar = styled.div`
  width: 500px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px gray;
`;

const SearchInput = styled.input`
  width: 85%;
  outline: none;
  border: none;
  font-size: 15px;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
`;

const NoResult = styled.div`
  width: 70%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NullItem = styled.div`
  width: 30%;
  height: 450px;
`;

function SearchFlower() {
  const [page, setPage] = useState(1);
  const [flowers, setFlowers] = useState();
  const [searchMode, setSearchMode] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (page > 0) {
      fetchData();
    }
  }, [page]);

  const handlePage = (pageNumber) => {
    window.scrollTo(0, 0);
    if (pageNumber === 0) {
      setPage(pageNumber);
      setSearchMode(true);
      setFlowers();
    } else {
      setSearchMode(false);
      setPage(pageNumber);
    }
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    if (page !== 0) {
      handlePage(0);
      searchData();
    } else {
      searchData();
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://emotionfeedback.site/dictionary?page=${page}`
      );

      setFlowers(response.data);
      setText("");
    } catch (error) {
      // if (error.response.status === 401) {
      //   refreshAccessToken(memberId, fetchData);
      // }
      console.error("Failed to fetch user data:", error);
    }
  };

  const searchData = async () => {
    if (text === "") {
      setFlowers();
      return;
    }
    try {
      const response = await axios.get(
        `https://emotionfeedback.site/dictionary/search?name=${text}`
      );

      setFlowers(response.data);
      setText("");
    } catch (error) {
      // if (error.response.status === 401) {
      //   refreshAccessToken(memberId, fetchData);
      // }
      console.error("Failed to fetch user data:", error);
    }
  };

  return (
    <Wrapper>
      <Header />
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="꽃의 이름을 입력해보세요"
          value={text}
          onChange={handleText}
          onKeyDown={handleEnter}
        />
        <IconSearch top={true} clickSearch={handleSearch} />
      </SearchBar>
      {searchMode ? (
        flowers === undefined || flowers.length === 0 ? (
          <NoResult>검색한 꽃이 없습니다</NoResult>
        ) : flowers &&
          (flowers.length % 3 === 0 || flowers.length % 3 === 1) ? (
          <Container>
            {flowers && flowers.map((v, i) => <FlowerItem info={v} key={i} />)}
          </Container>
        ) : (
          <Container>
            {flowers && flowers.map((v, i) => <FlowerItem info={v} key={i} />)}
            <NullItem />
          </Container>
        )
      ) : flowers && (flowers.length % 3 === 0 || flowers.length % 3 === 1) ? (
        <Container>
          {flowers && flowers.map((v, i) => <FlowerItem info={v} key={i} />)}
        </Container>
      ) : (
        <Container>
          {flowers && flowers.map((v, i) => <FlowerItem info={v} key={i} />)}
          <NullItem />
        </Container>
      )}

      <PageNumber page={page} handlePage={handlePage} searchMode={searchMode} />
    </Wrapper>
  );
}

export default SearchFlower;
