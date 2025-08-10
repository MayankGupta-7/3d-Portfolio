

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const statsData = [
  { id: 1, title: 'Total Users', value: 2450, icon: '👥' },
  { id: 2, title: 'Active Projects', value: 128, icon: '📁' },
  { id: 3, title: 'Pending Tasks', value: 37, icon: '⏳' },
  { id: 4, title: 'Revenue', value: '$58,230', icon: '💰' },
];

const recentActivities = [
  'User John Doe registered',
  'Project "Redesign Website" marked complete',
  'New comment on ticket #452',
  'System backup completed',
  'Password changed for user admin',
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate(); // Use navigate from react-router-dom

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await fetch('http://localhost:5001/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        }
      } catch (err) {
        console.error('Fetch user error:', err);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Redirect to Hero (home) page on logout
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-md transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto`}
      >
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">Admin Panel</h1>
        </div>
        <nav className="flex flex-col mt-4">
          <a href="/dashboard" className="px-6 py-3 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 font-semibold">
            Dashboard
          </a>
          <a href="/dashboard/users" className="px-6 py-3 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 font-semibold">
            Home
          </a>
          <a href="/dashboard/projects" className="px-6 py-3 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 font-semibold">
            Projects
          </a>
          <a href="/dashboard/settings" className="px-6 py-3 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 font-semibold">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-64">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white shadow px-4 h-16">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 focus:outline-none md:hidden"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="text-gray-700">
                  Welcome, <span className="font-semibold">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="text-gray-500">Loading user...</div>
            )}
          </div>
        </header>

        
        <main className="flex-1 p-6 overflow-y-auto">
         
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map(({ id, title, value, icon }) => (
              <div
                key={id}
                data-aos="fade-up"
                className="bg-white rounded-lg shadow p-6 flex items-center space-x-4"
              >
                <div className="text-4xl">{icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-2xl font-bold">{value}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Recent activity */}
          <section
            data-aos="fade-left"
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recentActivities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
