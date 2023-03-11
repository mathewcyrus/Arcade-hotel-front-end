import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../../hooks/fetchMethod";
import { dataRequest } from "../../hooks/requestMethods";
const Div = styled.table`
  margin-top: 15px;
  background-image: -webkit-linear-gradient(#d3d3d360, #d3d3d311);
  width: 980px;
`;
const Tablerow = styled.tr`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-bottom: 5px;
  &.tableheader {
    padding: 3px;
    background-color: orange;
  }
`;
const TableHeader = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  flex: 1;

  &.products {
    flex: none;
    width: 300px;
  }
`;
const TableData = styled.td`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* flex-direction: column; */
  flex: 1;
  font-size: 16px;

  &.product {
    flex-direction: column;
    width: 300px;

    div {
      border-radius: 50%;
    }
    span {
      font-weight: 700;
    }
  }
  &.item {
    gap: 10px;
    width: 300px;
  }
`;
const Order = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await dataRequest.get("/orders/customer/orders");
        setOrders(res.data);
      } catch (error) {}
    };
    fetchOrders();
  }, []);
  console.log(orders);
  return (
    <>
      <Div>
        <Tablerow className="tableheader">
          <TableHeader>order no:</TableHeader>
          <TableHeader className="products">products</TableHeader>
          <TableHeader>address</TableHeader>
          <TableHeader>order date</TableHeader>
          <TableHeader>totals</TableHeader>
          <TableHeader>payment method</TableHeader>
        </Tablerow>
        {orders.length === 0 ? (
          <h4>You have no meal orders</h4>
        ) : (
          orders.map((order, i) => (
            <Tablerow>
              <TableData>{i + 1}</TableData>

              <TableData className="product">
                {order.product.map((item) => (
                  <TableData className="item">
                    <div>{item.productimage}</div>
                    {item.productname}
                    <span>{item.productquantity}</span>
                  </TableData>
                ))}
              </TableData>
              <TableData className="name">{order.address}</TableData>
              <TableData>
                {new Date(order.orderdate).toLocaleDateString()}
              </TableData>
              <TableData>{order.total}</TableData>
              <TableData>{order.paymentmethod}</TableData>
            </Tablerow>
          ))
        )}
      </Div>
    </>
  );
};

export default Order;
