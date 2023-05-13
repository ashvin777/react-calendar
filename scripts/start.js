const fs = require('fs');

fs.cpSync('./src', './examples/basic/src/ReactCalendar/', {
  recursive: true,
  force: true
});

fs.watch('./src', { recursive: true }, () => {
  fs.cpSync('./src', './examples/basic/src/ReactCalendar/', {
    recursive: true,
    force: true
  });
});
