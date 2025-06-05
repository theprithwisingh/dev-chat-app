export default function Home() {
  return (
<div className="min-h-screen flex items-center justify-center p-4 bg-black select-none	">
  <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        developr. Group Chat
      </h1>
      <p className="text-gray-600">Join an existing room or create a new one</p>
    </div>

    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Username
        </label>
        <input
          type="text"
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          placeholder="Enter your username"
        />
      </div>

      <div className="flex space-x-4">
        <button
          className="flex-1 py-2 px-4 rounded-lg font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Join Room
        </button>
        <button
          className="flex-1 py-2 px-4 rounded-lg font-medium transition-colors bg-orange-600 text-white"
        >
          Create Room
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Room ID</label>
        <input
          type="text"
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          placeholder="Enter room ID"
        />
      </div>
      <button
        className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Join Room
      </button>
    </div>

    <div className="mt-8 text-center text-sm text-gray-500">
      <p className="select-none	">❤️ build by prithwisingh</p>
    </div>
  </div>
</div>

  );
}
