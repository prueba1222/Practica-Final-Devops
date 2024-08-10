const fs = require('fs');

test('HTML file should exist', () => {
    expect(fs.existsSync('index.html')).toBe(true);
});