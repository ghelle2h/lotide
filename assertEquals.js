const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("They are the same✅");
  } else console.assert(actual === expected, "❌");
};
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(2, 5);
assertEqual('Light', 'light');
assertEqual('brown', 'brown');