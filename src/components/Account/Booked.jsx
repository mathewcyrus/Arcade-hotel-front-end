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
  font-size: 14px;
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
  font-size: 14px;
`;
const Booked = () => {
  const [bookedRooms, setBookedRooms] = useState([]);
  useEffect(() => {
    const fetchBookedRooms = async () => {
      const res = await dataRequest.get("/reservations");
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
        <TableHeader>Room number</TableHeader>
        <TableHeader>Room type</TableHeader>
        <TableHeader>check-in</TableHeader>
        <TableHeader>check-out</TableHeader>
        <TableHeader>adults</TableHeader>
        <TableHeader>children</TableHeader>
        <TableHeader>Bed rooms</TableHeader>
        <TableHeader>total days</TableHeader>
      </Tablerow>

      {bookedRooms.map((bookedroom, i) => (
        <Tablerow key={i}>
          <TableData>{bookedroom.ReservedRoom.roomNumber}</TableData>
          <TableData>{bookedroom.ReservedRoom.roomcategory}</TableData>
          {bookedroom.ReservationsDates.map((date, i) => (
            <>
              <TableData key={i}>
                {new Date(date.startDate).toLocaleDateString()}
              </TableData>
              <TableData key={i}>
                {new Date(date.endDate).toLocaleDateString()}
              </TableData>
            </>
          ))}
          {bookedroom.bookingoptions.map((option, i) => (
            <>
              <TableData key={i}>{option.adults}</TableData>
              <TableData key={i}>{option.children}</TableData>
              <TableData key={i}>{option.bedrooms}</TableData>
            </>
          ))}
          <TableData>{bookedroom.totaldays}</TableData>
        </Tablerow>
      ))}
    </Div>
  );
};

export default Booked;
