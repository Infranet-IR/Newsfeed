(function () {
  // CSS dynamisch hinzufügen
  const style = document.createElement("style");
  style.textContent = `
    .scroll-frame {
      width: 100%;
      height: 30%;
      overflow-y: auto;
      border: 1px solid #ccc;
      padding: 10px;
      box-sizing: border-box;
    }

    #staffbase-news-widget {
      display: block;
      visibility: visible;
      height: 100%;
    }
  `;
  document.head.appendChild(style);

  // HTML-Container einfügen
  const scrollFrame = document.createElement("div");
  scrollFrame.className = "scroll-frame";

  const widgetContainer = document.createElement("div");
  widgetContainer.id = "staffbase-news-widget";

  scrollFrame.appendChild(widgetContainer);
  document.body.appendChild(scrollFrame);

  // Staffbase-Widget laden
  const staffbaseScript = document.createElement("script");
  staffbaseScript.src = "https://de1.staffbasestatic.com/widgets/ms365/m365-widgets-v1.11.6.min.mjs";
  staffbaseScript.type = "module";
  staffbaseScript.async = true;
  document.body.appendChild(staffbaseScript);
})();
