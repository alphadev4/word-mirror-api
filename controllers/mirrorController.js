const WordPair = require('../models/WordPair');

function transformWord(word) {
  const swappedCase = word.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      return char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
  
  return swappedCase.split('').reverse().join('');
}

const mirrorWord = async (req, res) => {
  try {
    const { word } = req.query;
    
    if (!word) {
      return res.status(400).json({ 
        error: 'Missing required query parameter: word' 
      });
    }
    
    const transformed = transformWord(word);
    
    const wordPair = new WordPair({
      originalWord: word,
      mirroredWord: transformed
    });
    
    await wordPair.save();
    console.log(`Saved: "${word}" -> "${transformed}"`);
    
    res.json({ transformed });
    
  } catch (error) {
    console.error('Error processing mirror request:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
};

module.exports = {
  mirrorWord
};

