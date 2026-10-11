import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphics, graphicCategories } from '../../data/graphics';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function GraphicsView() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? graphics 
    : graphics.filter((g) => g.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-12 py-10">
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-squids text-gray-800 text-3xl md:text-5xl mb-1">Graphics & Visual Designs</h1>
        <div className="h-0.5 w-20 bg-dredd-green mb-4" />
        <p className="font-anta text-gray-600 text-sm md:text-base max-w-2xl">
          A showcase of branding, flyers, book covers, and graphic designs crafted with Adobe Photoshop, Illustrator, and Canva.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {graphicCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-anta capitalize transition-all duration-200 ${
              filter === cat
                ? 'bg-gray-800 text-white shadow'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered && filtered.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filtered.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="mb-4 overflow-hidden rounded-xl shadow-md bg-white border border-gray-200/50 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.src}
                alt={item.name || `Graphic design ${index + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-3 flex justify-between items-center">
                <h3 className="font-squids text-gray-800 text-sm">{item.name}</h3>
                <span className="text-xs font-anta px-2 py-0.5 bg-gray-100 text-dredd-green rounded-full capitalize">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </Masonry>
      ) : (
        <div className="text-center py-20 text-gray-500 font-anta">
          No graphics found for this category.
        </div>
      )}
    </div>
  );
}
