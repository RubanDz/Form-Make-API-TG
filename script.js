

// https://hook.us2.make.com/ig6ruz116lp7u1ab1khnohafi3w9s6xf 



document.querySelectorAll(".contact-form").forEach(function(form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      const formData = new FormData(event.target);
  
     
      const data = {
        name: formData.get("name") || "",  
        phone: formData.get("phone") || "", 
        message: formData.get("message") || "", 
        email: formData.get("email") || "", 
        sufit: formData.get("sufit") || "", 
        size: formData.get("size") || "", 
        metr: formData.get("metr") || "", 
        punkt: formData.get("punkt") || "", 
        client_type: formData.get("client-type3") || "", 
        client_type_second: formData.get("client-type4") || "", // Kiedy najlepiej się z Tobą skontaktować?
    };
    
  
      // URL вашего вебхука
      const webhookUrl = "https://hook.us2.make.com/ig6ruz116lp7u1ab1khnohafi3w9s6xf";
  
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        console.log("Data sent to Make", result);
        alert("Formularz przesłany pomyślnie!");
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Formularz przesłany pomyślnie!");
      });
    });
  });
  