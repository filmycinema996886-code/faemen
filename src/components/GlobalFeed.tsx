const feedItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'Personio Campaign',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'Spotify Campaign',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'RedBull Campaign',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      type: 'Babbel Campaign',
    }
  ];

              {feedItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.type}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-white font-semibold text-sm">{item.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}