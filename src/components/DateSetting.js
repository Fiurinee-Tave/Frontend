import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const StyledDatePicker = styled(DatePicker)`
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  width: 140px;
  padding: 2px;
  text-align: center;

  cursor: pointer;

  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
`;

function DateSetting({ selectedDate, setSelectedDate }) {
  //input readOnly 이슈,,, 해결 제발요

  const handleDateFormat = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  return (
    <Wrapper>
      <StyledDatePicker
        dateFormat="yyyy년MM월dd일"
        shouldCloseOnSelect
        selected={selectedDate}
        onChange={handleDateFormat}
      />
    </Wrapper>
  );
}

export default DateSetting;
