# AA Daily Reflections Scraper

<a href="https://paladini.io/harness-score/guide/maturity-model#l0-%C2%B7-unharnessed" title="Harness Score — AI coding harness maturity"><img alt="Harness Score L0 (Unharnessed): measures AI-assisted development harness maturity with harness-score" src="https://paladini.github.io/harness-score/maturity/badge-l0.svg" height="20"></a>
## Overview
Este projeto utiliza a biblioteca `aa-daily-reflections` para fazer scraping de todas as reflex├Áes di├írias do Alc├│olicos An├┤nimos em ingl├¬s, franc├¬s e espanhol para um ano espec├¡fico.

## Caracter├¡sticas

- Ô£à **Scraper unificado**: Um ├║nico scraper que aceita diferentes idiomas como par├ómetro
- Ô£à **M├║ltiplos formatos de export**: JSON, CSV e SQLite database
- Ô£à **Rate limiting**: Pequenos delays entre requisi├º├Áes para n├úo sobrecarregar a API
- Ô£à **Logs detalhados**: Acompanhe o progresso do scraping
- Ô£à **TypeScript**: Totalmente tipado

## ­ƒôä Formatos de Sa├¡da

O scraper exporta as reflex├Áes di├írias em m├║ltiplos formatos:

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
- `reflections.db` - Cont├®m todas as reflex├Áes em um banco estruturado

Todos os arquivos s├úo gerados no diret├│rio `/data`.

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
