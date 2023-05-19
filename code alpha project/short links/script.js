function generateShortLink() {
    const longUrl = document.getElementById('urlInput').value;
    const shortLink = generateRandomString();
    const outputElement = document.getElementById('shortLink');
    outputElement.textContent = `Short Link: https://short.link/${shortLink}`;
  }
  
  function generateRandomString() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let i = 0; i < 6; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  }
  