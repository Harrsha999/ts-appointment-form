document.addEventListener("DOMContentLoaded", function () {
    var formContainer = document.getElementById('form-container');
    var form = document.createElement('form');
    form.action = '#';
    form.method = 'post';
    var formTitle = document.createElement('h2');
    formTitle.textContent = 'Book an Appointment';
    formTitle.style.textAlign = 'center';
    form.appendChild(formTitle);
    var fields = [
        { label: 'Name:', type: 'text', id: 'name', name: 'name' },
        { label: 'Age:', type: 'number', id: 'age', name: 'age' },
        { label: 'Email:', type: 'email', id: 'email', name: 'email' },
        { label: 'Date:', type: 'date', id: 'date', name: 'date' },
        { label: 'Time:', type: 'time', id: 'time', name: 'time' }
    ];
    fields.forEach(function (field) {
        var fieldWrapper = document.createElement('div');
        fieldWrapper.style.marginBottom = '20px';
        var label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        label.style.display = 'block';
        label.style.marginBottom = '5px';
        label.style.fontWeight = 'bold';
        var input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.name;
        input.required = true;
        input.style.width = 'calc(100% - 22px)';
        input.style.padding = '10px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '4px';
        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(input);
        form.appendChild(fieldWrapper);
    });
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.style.padding = '10px';
    submitButton.style.backgroundColor = '#28a745';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.width = '100%';
    form.appendChild(submitButton);
    formContainer.style.maxWidth = '400px';
    formContainer.style.margin = '20px auto';
    formContainer.style.padding = '20px';
    formContainer.style.backgroundColor = 'white';
    formContainer.style.borderRadius = '8px';
    formContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    formContainer.appendChild(form);
});
