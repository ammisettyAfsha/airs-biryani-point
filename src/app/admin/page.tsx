'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

type Order = {
  id: string;
  customer: string;
  items: OrderItem[];
  total: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const isAuth = localStorage.getItem('admin-auth');
    if (!isAuth) {
      router.push('/admin/login');
      return;
    }

    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]') as Order[];
    setOrders(savedOrders);
  }, [router]); // ✅ Fix: Add router to dependency array

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border p-4 rounded shadow bg-white">
              <h3 className="font-bold text-lg">Order #{order.id}</h3>
              <p className="text-sm text-gray-700 mb-1">Customer: {order.customer}</p>
              <ul className="list-disc list-inside text-sm mb-2">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.quantity} x {item.name} @ ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="font-semibold">Total: ${order.total}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
