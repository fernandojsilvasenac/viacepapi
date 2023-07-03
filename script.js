//brasilapi.com.br

function consultarCEP() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => exibirResultado(data))
      .catch(error => console.log(error));
}
  
// const consultarCEP = async () => {

// async function consultarCEP() {
//     const cep = document.getElementById('cep').value;
//     const url = `https://viacep.com.br/ws/${cep}/json/`;
  
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       exibirResultado(data);
//     } catch (error) {
//       console.log(error);
//     }
// }


// const exibirResultado = data => {
function exibirResultado(data) {
    const resultado = document.getElementById('resultado');
    const logradouro = document.querySelector('#logradouro');
    resultado.innerHTML = '';
  
    if (data.erro) {
      resultado.textContent = 'CEP não encontrado.';
    } else {
      const endereco = `
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>Estado:</strong> ${data.uf}</p>
      `;
      resultado.innerHTML = endereco;
      logradouro.value = data.logradouro;
    }
}
  