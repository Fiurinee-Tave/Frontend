import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import styled from "styled-components";

const StyledDatePicker = styled(DatePicker)`
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  width: 140px;
  padding: 2px;

  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

function DateSetting() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  //input readOnly 이슈,,, 해결 제발요
  return (
    <Wrapper>
      <StyledDatePicker
        readOnly
        dateFormat="yyyy년MM월dd일"
        shouldCloseOnSelect
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </Wrapper>
  );
}

export default DateSetting;
