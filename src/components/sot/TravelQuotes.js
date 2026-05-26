// ============================================================
// Travel Quotes Library — SOT Experience
// ============================================================

export const travelQuotes = [
  "Travel is the only thing you buy that makes you richer.",
  "The journey, not the arrival, matters.",
  "To travel is to live.",
  "Wander often, wonder always.",
  "Adventure awaits those who seek the mountains.",
  "Collect moments, not things.",
  "Jobs fill your pocket. Adventures fill your soul.",
  "Life begins at the end of your comfort zone.",
  "Travel far enough to meet yourself.",
  "Wherever you go becomes a part of you somehow.",
  "Take only memories, leave only footprints.",
  "Escape the ordinary. Chase the extraordinary.",
  "Travel makes one modest — you see what a tiny place you occupy in the world.",
  "The mountains are calling and I must go. — John Muir",
  "Travel opens your heart, broadens your mind and fills your life with stories to tell.",
  "The world is too beautiful to stay in one place.",
  "Live your life by a compass, not a clock.",
  "Travel changes everything. Go. See. Feel.",
  "Every mountain top is within reach if you just keep climbing.",
  "Born to roam. Destined to explore.",
  "Not all those who wander are lost. — J.R.R. Tolkien",
  "A ship in harbour is safe, but that is not what ships are for.",
  "The biggest adventure you can take is to live the life of your dreams.",
  "Once a year, go somewhere you've never been before.",
  "We travel not to escape life, but for life not to escape us.",
];

let previousQuoteIndex = -1;

/**
 * Returns a random travel quote, avoiding immediate repetition.
 */
export function getRandomQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * travelQuotes.length);
  } while (index === previousQuoteIndex);
  previousQuoteIndex = index;
  return travelQuotes[index];
}
