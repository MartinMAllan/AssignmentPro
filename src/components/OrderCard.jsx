function OrderCard({ title, status, time, price, urgent }) {
  return (
    <div className="border p-4 mb-4 rounded shadow flex justify-between">
      <div>
        <h3 className="font-bold text-purple-600">{title}</h3>
        <p>{status}</p>
      </div>
      <div>
        <span className={urgent ? 'text-red-500' : 'text-blue-500'}>{time}</span>
        <span className="ml-4 font-bold">{price}</span>
      </div>
    </div>
  );
}

export default OrderCard;