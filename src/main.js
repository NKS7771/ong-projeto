
import "./style.css";

document.querySelector("#app").innerHTML = `
  <main class="container">
    <h1>Projeto ONG</h1>
    <p>Projeto Integrador Extensionista II</p>

    <section class="status-card">
      <h2>Status da API</h2>
      <p id="api-status">Verificando conexão...</p>
    </section>
  </main>
`;

async function verificarAPI() {
  const status = document.querySelector("#api-status");

  try {
    const resposta = await fetch("/api/health");

    if (!resposta.ok) {
      throw new Error("Erro ao consultar a API");
    }

    const dados = await resposta.json();
    status.textContent = `Status da API: ${dados.status}`;
  } catch (erro) {
    status.textContent = "Status da API: erro de conexão";
    console.error(erro);
  }
}

verificarAPI();
