import React, { useState } from "react";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart } from "react-icons/fa";
import Masonry from "react-masonry-css";

const graphics = [
  {
    id: 1,
    name: "Birthday Card",
    category: "card",
    src: "https://i.pinimg.com/564x/67/53/0d/67530df95a633ce513512487af25cd02.jpg",
    likes: 24,
  },
  {
    id: 2,
    name: "Event Banner",
    category: "banner",
    src: "https://i.pinimg.com/236x/b1/e4/b1/b1e4b112abd2f3c9497d593889666478.jpg",
    likes: 18,
  },
  {
    id: 3,
    name: "Promotional Flyer",
    category: "flyer",
    src: "https://i.pinimg.com/236x/25/4f/05/254f05a15d7970d53acc528346ce6976.jpg",
    likes: 32,
  },
  {
    id: 4,
    name: "Digital Artwork",
    category: "artwork",
    src: "https://i.pinimg.com/236x/e0/45/7d/e0457db61202afdcd9b8dd228a18307a.jpg",
    likes: 45,
  },
  {
    id: 5,
    name: "Web Banner",
    category: "banner",
    src: "https://i.pinimg.com/564x/36/b7/96/36b7960658e2e1861b8456de8355cc8d.jpg",
    likes: 29,
  },
  {
    id: 6,
    name: "Social Media Banner",
    category: "banner",
    src: "https://i.pinimg.com/236x/55/66/3a/55663aaad682fe7f2d7db8efbf8848eb.jpg",
    likes: 37,
  },
  {
    id: 7,
    name: "Brand Sticker",
    category: "sticker",
    src: "https://i.pinimg.com/236x/50/89/83/508983b06533bddcc00f8559cf809d6d.jpg",
    likes: 15,
  },
  {
    id: 8,
    name: "Logo Sticker",
    category: "sticker",
    src: "https://i.pinimg.com/236x/05/da/06/05da06cdfa121b00a0a4c4c3760bccff.jpg",
    likes: 22,
  },
  {
    id: 9,
    name: "Novel Cover",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/4c/f4/1e/4cf41e94030f267aebbb500ea5459a4e.jpg",
    likes: 41,
  },
  {
    id: 10,
    name: "Fantasy Book Cover",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/54/e6/b5/54e6b59166c0db412e2ef66feda1001d.jpg",
    likes: 38,
  },
  {
    id: 11,
    name: "Sci-Fi Book Cover",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/87/bb/36/87bb36c2dc2451c5601b69f6c64bf0e9.jpg",
    likes: 27,
  },
  {
    id: 12,
    name: "Children's Book Cover",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/40/d2/06/40d20645a21a917b044d969b92a87f63.jpg",
    likes: 33,
  },
  {
    id: 13,
    name: "Biography Book Cover",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/e0/7c/94/e07c9477ab2cd9e12fe9394832b249ea.jpg",
    likes: 19,
  },
];

const Graphics = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [likedItems, setLikedItems] = useState([]);
  const navi = useNavigate();

  // Get unique categories
  const categories = ["all", ...new Set(graphics.map((item) => item.category))];

  // Filter graphics based on category and search term
  const filteredGraphics = graphics.filter((item) => {
    const matchesCategory = filter === "all" || item.category === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle like functionality
  const toggleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter((itemId) => itemId !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 5,
    1280: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <PageTransition>
      <div className=" mx-auto px-4 py-8 max-w-7xl">
        {/* Back Button */}
        <motion.button
          onClick={() => navi("/Project")}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="fixed top-20 left-6 z-50 bg-gray-800 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          <span className="hidden sm:inline">Back to Projects</span>
        </motion.button>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-squids text-gray-800 mb-2">
            Graphics Portfolio
          </h1>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-800 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
          <p className="text-gray-800 max-w-2xl mx-auto">
            A collection of my graphic design work including book covers,
            banners, cards, and more.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search designs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-gray-500 focus:border-gray-600 outline-none transition-all"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {filteredGraphics.length > 0 ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex w-auto -ml-4"
              columnClassName="pl-4 bg-clip-padding"
            >
              {filteredGraphics.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="mb-4 relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:shadow-xl">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {item.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-white/90 text-sm bg-gray-600/80 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleLike(item.id);
                          }}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                        >
                          <FaHeart
                            className={`${
                              likedItems.includes(item.id)
                                ? "text-red-500"
                                : "text-white"
                            }`}
                            size={16}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No graphics found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setFilter("all");
                  setSearchTerm("");
                }}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Graphics;
