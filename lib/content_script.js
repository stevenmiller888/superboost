
/**
 * Store the matches we've already viewed.
 */

const viewed = {};

/**
 * Kick it off!
 */

superboost();

/**
 * Reboost every 20 seconds.
 */

setInterval(superboost, 20000);

/**
 * Superboost.
 */

function superboost() {
  const url = 'https://www.okcupid.com/match';
  if (window.location.href !== url) return alert(`Please visit ${url} to use this extension`);

  window.scrollTo(0, document.body.scrollHeight - 50);

  var matches = document.querySelectorAll('.match_card a');
  [].slice.call(matches).forEach(function(match) {
    const href = match.href;
    if (viewed[href]) return;
    viewed[href] = true;

    const tab = window.open(href);
    tab.addEventListener('load', function() {
      tab.close();
    });
  });
}
