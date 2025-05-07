(function() {
  // Findet den Container, in dem das Newsfeed angezeigt werden soll
  const container = document.getElementById("staffbase-news-widget");
  
  if (container) {
    // Newsfeed wird dynamisch geladen
    const script = document.createElement("script");
    script.src = "https://de1.staffbasestatic.com/widgets/ms365/m365-widgets-v1.11.6.min.mjs";
    script.async = true;
    document.body.appendChild(script);
  }
})();
