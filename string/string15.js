// The most frequent word in string

function mostFrequentWord(str) {
    const words = str.toLowerCase().split(" ");
    const freq = {};
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (freq[word]) {
        freq[word]++;
      } else {
        freq[word] = 1;
      }
    }
    let maxFreq = 0;
    let maxWord = "";
    for (const word in freq) {
      if (freq[word] > maxFreq) {
        maxFreq = freq[word];
        maxWord = word;
      }
    }
  
    return maxWord;
  }
  const str = "the quick brown fox jumps over the lazy dog";
  const mostFrequent = mostFrequentWord(str);
  console.log(`The most frequent word is "${mostFrequent}"`);