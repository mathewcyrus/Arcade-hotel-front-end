import { format } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { dataRequest } from "../../hooks/requestMethods";
const Div = styled.table`
  margin-top: 15px;
  background-image: -webkit-linear-gradient(#d3d3d360, #d3d3d311);
`;
const Tablerow = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  width: 900px;
  &.tableheader {
    padding: 3px;
    background-color: orange;
  }
`;
const TableHeader = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  flex: 1;
`;
const TableData = styled.td`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 16px;
`;
const Booked = () => {
  const [bookedRooms, setBookedRooms] = useState([]);
  useEffect(() => {
    const fetchBookedRooms = async () => {
      const res = await dataRequest.get("/rooms/reserved/allrooms");
      setBookedRooms(res.data);
      console.log(res.data);
    };
    fetchBookedRooms();
  }, []);

  return bookedRooms.length === 0 ? (
    <h4>You have not made any reservations</h4>
  ) : (
    <Div>
      <Tablerow className="tableheader">
        <TableHeader>Room</TableHeader>
        <TableHeader>Room type</TableHeader>
        <TableHeader>Bed rooms</TableHeader>
        <TableHeader>check-in</TableHeader>
        <TableHeader>check-out</TableHeader>
        <TableHeader>adults</TableHeader>
        <TableHeader>children</TableHeader>
        <TableHeader>total days</TableHeader>
      </Tablerow>

      {bookedRooms.map((bookedroom) => (
        <Tablerow>
          <TableData>{bookedroom.number}</TableData>
          <TableData>{bookedroom.category}</TableData>
          <TableData>{bookedroom.bedrooms}</TableData>
          {bookedroom.bookedDates.map((date) => (
            <>
              <TableData>
                {new Date(date.startDate).toLocaleDateString()}
              </TableData>
              <TableData>
                {new Date(date.endDate).toLocaleDateString()}
              </TableData>
            </>
          ))}
          {bookedroom.bookingoptions.map((option) => (
            <>
              <TableData>{option.adults}</TableData>
              <TableData>{option.children}</TableData>
            </>
          ))}
          <TableData>2</TableData>
        </Tablerow>
      ))}
    </Div>
  );
};

export default Booked;
