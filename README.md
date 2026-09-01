# Landing page romântica

Projeto feito para Larissa: uma página simples, responsiva e feita para uma declaração de amor.

## Personalização

Para usar no XAMPP, altere os valores no começo de `index.php`. Para publicar no GitHub Pages, altere os mesmos textos diretamente no `index.html`.

- `$nomeDela`: nome ou apelido dela;
- `$seuNome`: sua assinatura;
- `$frasePrincipal`: frase que aparece na primeira tela;
- `$mensagem`: texto da carta;
- `$dataInicio`: data do início do relacionamento no formato `AAAA-MM-DD` (opcional).

Se `$dataInicio` ficar vazia, o contador de dias não aparece.

## Como abrir

Com o XAMPP e o Apache ligados, acesse:

`http://localhost/SiteLarissa/`

## Publicar gratuitamente no GitHub Pages

O arquivo `index.html` é a versão estática pronta para o GitHub Pages. Ela não precisa de PHP: o contador de dias é atualizado pelo JavaScript do navegador.

No repositório do GitHub, abra **Settings > Pages**, selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`.
