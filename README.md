# AA Daily Reflections Scraper

<img alt="Harness Score L0" src="https://paladini.github.io/harness-score/maturity/badge-l0.svg" height="20">
## Overview
Este projeto utiliza a biblioteca `aa-daily-reflections` para fazer scraping de todas as reflexÃµes diÃ¡rias do AlcÃ³olicos AnÃ´nimos em inglÃªs, francÃªs e espanhol para um ano especÃ­fico.

## CaracterÃ­sticas

- âœ… **Scraper unificado**: Um Ãºnico scraper que aceita diferentes idiomas como parÃ¢metro
- âœ… **MÃºltiplos formatos de export**: JSON, CSV e SQLite database
- âœ… **Rate limiting**: Pequenos delays entre requisiÃ§Ãµes para nÃ£o sobrecarregar a API
- âœ… **Logs detalhados**: Acompanhe o progresso do scraping
- âœ… **TypeScript**: Totalmente tipado

## ðŸ“„ Formatos de SaÃ­da

O scraper exporta as reflexÃµes diÃ¡rias em mÃºltiplos formatos:

### 1. Arquivos JSON
- `daily_reflections_YYYY_english.json`
- `daily_reflections_YYYY_french.json` 
- `daily_reflections_YYYY_spanish.json`

### 2. Planilhas CSV
- `daily_reflections_YYYY_english.csv`
- `daily_reflections_YYYY_french.csv`
- `daily_reflections_YYYY_spanish.csv`
- `daily_reflections_YYYY_all_languages.csv` (arquivo combinado)

### 3. Banco SQLite
- `reflections.db` - ContÃ©m todas as reflexÃµes em um banco estruturado

Todos os arquivos sÃ£o gerados no diretÃ³rio `/data`.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/paladini/aa-daily-reflections-api.git
   cd aa-reflections-scraper
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage
To run the scraper, execute the following command:
```
npm start
```

This will initiate the scraping process for the specified year and export the data according to the configured options.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
