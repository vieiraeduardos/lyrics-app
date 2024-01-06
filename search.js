// Função para carregar dados do arquivo JSON
async function carregarArtistas() {
    try {
      const resposta = await fetch('database.json');
      const dados = await resposta.json();
      exibirArtistas(dados);
    } catch (erro) {
      console.error('Erro ao carregar dados:', erro);
    }
  }

  // Função para exibir os artistas na página
  function exibirArtistas(artistas) {
    const listaArtistas = document.getElementById('artist-list');

    artistas.forEach((artista) => {
      const card = document.createElement('div');
      card.classList.add('artist-card');
      card.style.backgroundImage = `url('${artista.img}')`;

      const nome = document.createElement('h2');
      nome.textContent = artista.name;

      const genero = document.createElement('p');
      genero.textContent = `Gênero: ${artista.gender}`;

      card.appendChild(nome);
      card.appendChild(genero);
      listaArtistas.appendChild(card);
    });

    // Adicionar funcionalidade de busca
    document.getElementById('search-box').addEventListener('input', function () {
        const termoBusca = this.value.toLowerCase();
        const artistas = Array.from(document.querySelectorAll('.artist-card'));
  
        artistas.forEach((artista) => {
          const nomeArtista = artista.querySelector('h2').textContent.toLowerCase();
          if (nomeArtista.includes(termoBusca)) {
            artista.style.display = 'block';
          } else {
            artista.style.display = 'none';
          }
        });
    });
  }

  // Carregar os artistas ao carregar a página
  carregarArtistas();