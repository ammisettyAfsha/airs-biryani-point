'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndLoad = () => {
      const isAuth = localStorage.getItem('admin-auth');
      if (!isAuth) {
        router.push('/admin/login');
        return false;
      }
      return true;
    };

    if (!checkAuthAndLoad()) return;

    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
    setIsLoading(false);

    // Optional: You can add polling here if needed to reload orders periodically
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    router.push('/admin/login');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard - Orders</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded"
        >
          Logout
        </button>
      </div>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border p-4 rounded shadow bg-white">
              <h3 className="font-bold text-lg">Order #{order.id}</h3>
              <p className="text-sm text-gray-700 mb-1">Customer: {order.customer}</p>
              <ul className="list-disc list-inside text-sm mb-2">
                {order.items.map((item: any, idx: number) => (
                  <li key={idx}>
                    {item.quantity} x {item.name} @ ${item.price?.toFixed(2)}
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
