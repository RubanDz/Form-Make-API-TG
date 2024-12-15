

// https://hook.us2.make.com/ig6ruz116lp7u1ab1khnohafi3w9s6xf  это мой вебхук сценария для отправки данных формы на ваш вебхук. Вот как это работает:



document.querySelectorAll(".contact-form").forEach(function(form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();  // Предотвращаем стандартную отправку формы.
  
      const formData = new FormData(event.target);
  
      // Для каждой формы собираем данные
      const data = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        email: formData.get("email"), // Добавляем email для формы 3
        sufit: formData.get("sufit"), // Добавляем тип потолка для формы 2
        size: formData.get("size"), // Добавляем площадь для формы 2
        metr: formData.get("metr"), // Добавляем метры для формы 2
        punkt: formData.get("punkt"), // Добавляем точки освещения для формы 2
        client_type: formData.get("client-type3"), // Для формы 3 тип клиента
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
  