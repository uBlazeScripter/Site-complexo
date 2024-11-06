// Selecionando elementos
const movieForm = document.getElementById('movie-form');
const movieList = document.getElementById('movie-list');

// Função para adicionar um novo filme
function addMovie(event) {
    event.preventDefault();

        // Obter valores dos campos do formulário
            const title = document.getElementById('title').value;
                const director = document.getElementById('director').value;
                    const genre = document.getElementById('genre').value;
                        const year = document.getElementById('year').value;

                            // Criar um novo elemento de artigo
                                const movieArticle = document.createElement('article');
                                    movieArticle.innerHTML = `
                                            <h3>${title}</h3>
                                                    <p><strong>Diretor:</strong> ${director}</p>
                                                            <p><strong>Gênero:</strong> ${genre}</p>
                                                                    <p><strong>Ano:</strong> ${year}</p>
                                                                        `;

                                                                            // Adicionar o artigo à lista de filmes
                                                                                movieList.appendChild(movieArticle);

                                                                                    // Limpar o formulário
                                                                                        movieForm.reset();
                                                                                        }

                                                                                        // Adicionar o evento de envio ao formulário
                                                                                        movieForm.addEventListener('submit', addMovie);