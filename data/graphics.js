export const graphics = [
  { id: 1,  name: 'Birthday Card',       category: 'card',      src: 'https://i.pinimg.com/564x/67/53/0d/67530df95a633ce513512487af25cd02.jpg', likes: 24 },
  { id: 2,  name: 'Event Banner',        category: 'banner',    src: 'https://i.pinimg.com/236x/b1/e4/b1/b1e4b112abd2f3c9497d593889666478.jpg', likes: 18 },
  { id: 3,  name: 'Promotional Flyer',   category: 'flyer',     src: 'https://i.pinimg.com/236x/25/4f/05/254f05a15d7970d53acc528346ce6976.jpg', likes: 32 },
  { id: 4,  name: 'Digital Artwork',     category: 'artwork',   src: 'https://i.pinimg.com/236x/e0/45/7d/e0457db61202afdcd9b8dd228a18307a.jpg', likes: 45 },
  { id: 5,  name: 'Web Banner',          category: 'banner',    src: 'https://i.pinimg.com/564x/36/b7/96/36b7960658e2e1861b8456de8355cc8d.jpg', likes: 29 },
  { id: 6,  name: 'Social Media Banner', category: 'banner',    src: 'https://i.pinimg.com/236x/55/66/3a/55663aaad682fe7f2d7db8efbf8848eb.jpg', likes: 37 },
  { id: 7,  name: 'Brand Sticker',       category: 'sticker',   src: 'https://i.pinimg.com/236x/50/89/83/508983b06533bddcc00f8559cf809d6d.jpg', likes: 15 },
  { id: 8,  name: 'Logo Sticker',        category: 'sticker',   src: 'https://i.pinimg.com/236x/05/da/06/05da06cdfa121b00a0a4c4c3760bccff.jpg', likes: 22 },
  { id: 9,  name: 'Novel Cover',         category: 'Book Cover', src: 'https://i.pinimg.com/236x/4c/f4/1e/4cf41e94030f267aebbb500ea5459a4e.jpg', likes: 41 },
  { id: 10, name: 'Fantasy Book Cover',  category: 'Book Cover', src: 'https://i.pinimg.com/236x/54/e6/b5/54e6b59166c0db412e2ef66feda1001d.jpg', likes: 38 },
  { id: 11, name: 'Sci-Fi Book Cover',   category: 'Book Cover', src: 'https://i.pinimg.com/236x/87/bb/36/87bb36c2dc2451c5601b69f6c64bf0e9.jpg', likes: 27 },
  { id: 12, name: "Children's Book Cover", category: 'Book Cover', src: 'https://i.pinimg.com/236x/40/d2/06/40d20645a21a917b044d969b92a87f63.jpg', likes: 33 },
  { id: 13, name: 'Biography Book Cover', category: 'Book Cover', src: 'https://i.pinimg.com/236x/e0/7c/94/e07c9477ab2cd9e12fe9394832b249ea.jpg', likes: 19 },
];

export const graphicCategories = ['all', ...new Set(graphics.map((g) => g.category))];
