function loadPage(pagePath, stylePath) {
        fetch(pagePath)
          .then(response => response.text())
          .then(html => {
            // Extract body content from the loaded HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            console.log('Loaded HTML:', doc);
            const bodyContent = doc.body.innerHTML;
            
            // Inject into container
            document.getElementById('content-container').innerHTML = bodyContent;

            // Load the corresponding stylesheet
            if (stylePath) {
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = stylePath;
              document.head.appendChild(link);
            }
          })
          .catch(error => {
            document.getElementById('content-container').innerHTML = 
              '<p style="color: red;">Error loading page: ' + error + '</p>';
          });
      }