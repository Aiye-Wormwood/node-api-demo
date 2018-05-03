process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// node process-args.js one two=three four