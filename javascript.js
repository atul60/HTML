function loadPage(pagePath) {
        fetch(pagePath)
          .then(response => response.text())
          .then(html => {
            // Extract body content from the loaded HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const bodyContent = doc.body.innerHTML;
            
            // Inject into container
            document.getElementById('content-container').innerHTML = bodyContent;
          })
          .catch(error => {
            document.getElementById('content-container').innerHTML = 
              '<p style="color: red;">Error loading page: ' + error + '</p>';
          });
      }