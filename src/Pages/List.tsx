import NavBar from "../NavBar"

function List({}) {

  const restaurantData = [
    {
        name: "The Gourmet Spot",
        rating: 4.5,
        url: "https://example.com/gourmet",
        address: "123 Foodie Lane, NY",
        price: "$$$",
        categories: ["Fine Dining", "French Cuisine"],
    },
    {
        name: "Pizza Heaven",
        rating: 4.7,
        url: "https://example.com/pizza",
        address: "456 Slice Street, LA",
        price: "$$",
        categories: ["Pizza", "Italian"],
    },
    {
        name: "Burger Bliss",
        rating: 4.2,
        url: "https://example.com/burger",
        address: "789 Patty Ave, TX",
        price: "$",
        categories: ["Fast Food", "Burgers"],
    },
    ];

  return (
    <>
        <NavBar></NavBar>
        <h1>My List</h1>
        <div className="search-container">
        <select className="filter-dropdown">
            <option value="name">Name</option>
            <option value="rating">Rating</option>
            <option value="address">Address</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
        </select>
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
    </div>

        <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-gray-500 border border-gray-300">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
                <th className="px-4 py-3 border">Restaurant Name</th>
                <th className="px-4 py-3 border">Rating</th>
                <th className="px-4 py-3 border">URL</th>
                <th className="px-4 py-3 border">Address</th>
                <th className="px-4 py-3 border">Price</th>
                <th className="px-4 py-3 border">Categories</th>
                <th className="px-4 py-3 border">Add to List</th>
            </tr>
            </thead>
            <tbody>
            {restaurantData.map((restaurant, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 border">{restaurant.name}</td>
                <td className="px-4 py-3 border">{restaurant.rating} ⭐</td>
                <td className="px-4 py-3 border">
                    <a
                    href={restaurant.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    >
                    Visit
                    </a>
                </td>
                <td className="px-4 py-3 border">{restaurant.address}</td>
                <td className="px-4 py-3 border">{restaurant.price}</td>
                <td className="px-4 py-3 border">{restaurant.categories.join(", ")}</td>
                <td className="px-4 py-3 border">{<button>+</button>}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </>
);
}

export default List