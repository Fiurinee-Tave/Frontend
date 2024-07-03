import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
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
  const handleDateFormat = (date) => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <StyledDatePicker
        dateFormat="yyyy년MM월dd일"
        shouldCloseOnSelect
        selected={selectedDate}
        onChange={handleDateFormat}
        maxDate={new Date()}
      />
    </Wrapper>
  );
}

export default DateSetting;
