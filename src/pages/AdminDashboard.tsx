import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Check if user is admin
    if (!user || user.role !== 'admin') {
      navigate('/auth');
      return;
    }

    // Load messages from localStorage
    const storedMessages = localStorage.getItem('contactMessages');
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      // Sort messages by date, most recent first
      const sortedMessages = parsedMessages.sort((a: Message, b: Message) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setMessages(sortedMessages);
    }
  }, [navigate, user]);

  const handleDeleteMessage = (id: number) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage contact form messages
            </p>
          </div>

          <div className="px-6 py-4">
            <div className="overflow-hidden">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No messages</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    No messages have been received yet
                  </p>
                </div>
              ) : (
                <div className="flow-root">
                  <ul className="-my-5 divide-y divide-gray-200">
                    {messages.map((message) => (
                      <li key={message.id} className="py-5">
                        <div className="relative focus-within:ring-2 focus-within:ring-blue-500">
                          <div className="flex justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-3">
                                <p className="text-sm font-medium text-gray-900 truncate">{message.name}</p>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                  {message.date}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500">{message.email}</p>
                              <p className="text-sm text-gray-500">{message.phone}</p>
                              <p className="mt-2 text-sm text-gray-700">{message.message}</p>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                              <button
                                onClick={() => handleDeleteMessage(message.id)}
                                className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 