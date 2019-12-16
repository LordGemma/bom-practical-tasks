verify(/.../, ["car", "cats", "cartoon", "cart"]);

verify(/.../, ["pop", "props", "prrrop"]);

verify(/.../, ["ferret", "ferry", "ferrari"]);

function verify(regexp, words) {
  if (regexp.source == "...") return;
  for (let word of words) {
    if (!regexp.test(word)) {
      console.log(`Failure!`);
    }

    if (regexp.test(word)) {
      console.log(`Success!`);
    }
  }
}
