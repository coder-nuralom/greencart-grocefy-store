import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../context/StoreContext";
import { assets, dummyOrders } from "../../assets/assets";

const Orders = () => {
  const { currency } = useStoreContext();
  const [orders, setOrders] = useState([]);

  const fetchOders = async () => {
    setOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOders();
  }, []);

  return (
    <div className="md:p-6 pr-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>
      {orders?.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
        >
          <div className="flex gap-5">
            <img
              className="w-12 h-12 object-cover"
              src={assets.box_icon}
              alt="boxIcon"
            />
            <div>
              {order.items.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <p className="font-medium">
                    {item.product.name}{" "}
                    <span
                      className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}
                    >
                      x {item.quantity}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="font-medium mb-1">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p>
              {order.address.street}, {order.address.city}
            </p>
            <p className="mb-1">
              {order.address.state},{order.address.zipcode},
              {order.address.country}
            </p>

            <p>{order.address.phone}</p>
          </div>

          <p className="font-medium text-lg my-auto text-black/70">
            {currency}
            {order.amount}
          </p>

          <div className="flex flex-col text-sm">
            <p>Method: {order.paymentType}</p>
            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
