import React from "react";

const MyOrders = () => {
  const orders = [
    {
      id: "ORD-10234",
      product: "Nike Air Max 270",
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200",
      quantity: 1,
      total: 320,
      date: "10 Oct 2022",
      address: "123 Main St, New York, NY 10001, USA",
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: "ORD-10235",
      product: "Adidas Ultraboost",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200",
      quantity: 2,
      total: 450,
      date: "15 Oct 2022",
      address: "742 Evergreen Terrace, Springfield, USA",
      payment: "Pending",
      status: "Processing",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPaymentStyle = (payment) => {
    return payment === "Paid"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  return (
    // <div className="my-16">
    //   <div className="container mx-auto px-4 sm:px-6 md:px-8">
    //     <h2 className="text-lg font-medium">My Orders List</h2>
    //     <div className="space-y-3 mt-6">
    //       {orders.map((order, index) => (
    //         <div
    //           key={index}
    //           className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
    //         >
    //           <div className="flex gap-5">
    //             <img
    //               className="w-12 h-12 object-cover opacity-60"
    //               src={boxIcon}
    //               alt="boxIcon"
    //             />
    //             <>
    //               {order.items.map((item, index) => (
    //                 <div key={index} className="flex flex-col justify-center">
    //                   <p className="font-medium">
    //                     {item.product.name}{" "}
    //                     <span
    //                       className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}
    //                     >
    //                       x {item.quantity}
    //                     </span>
    //                   </p>
    //                 </div>
    //               ))}
    //             </>
    //           </div>

    //           <div className="text-sm">
    //             <p className="font-medium mb-1">
    //               {order.address.firstName} {order.address.lastName}
    //             </p>
    //             <p>
    //               {order.address.street}, {order.address.city},{" "}
    //               {order.address.state},{order.address.zipcode},{" "}
    //               {order.address.country}
    //             </p>
    //           </div>

    //           <p className="font-medium text-base my-auto text-black/70">
    //             ${order.amount}
    //           </p>

    //           <div className="flex flex-col text-sm">
    //             <p>Method: {order.paymentType}</p>
    //             <p>Date: {order.orderDate}</p>
    //             <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-[50vh] bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">My Orders</h1>

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6"
          >
            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Product Section */}
              <div className="md:col-span-4 flex items-center gap-4">
                <img
                  src={order.image}
                  alt={order.product}
                  className="w-20 h-20 rounded-lg object-cover border"
                />
                <div>
                  <p className="font-semibold text-lg">{order.product}</p>
                  <p className="text-sm text-gray-500">Qty: {order.quantity}</p>
                </div>
              </div>

              {/* Order Info */}
              <div className="md:col-span-3 text-sm text-gray-600 space-y-1">
                <p className="font-medium text-gray-800">
                  Order ID: {order.id}
                </p>
                <p>Date: {order.date}</p>
                <p className="line-clamp-2">{order.address}</p>
              </div>

              {/* Price */}
              <div className="md:col-span-2 font-semibold text-lg">
                ${order.total}
              </div>

              {/* Status */}
              <div className="md:col-span-2 space-y-2">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${getPaymentStyle(
                    order.payment,
                  )}`}
                >
                  {order.payment}
                </span>
                <br />
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusStyle(
                    order.status,
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Action */}
              <div className="md:col-span-1 text-right">
                <button className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  View
                </button>
                {/* {order.status === "Delivered" && (
                  <button className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Buy Again
                  </button>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
