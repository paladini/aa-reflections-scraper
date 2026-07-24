# AA Daily Reflections Scraper

<a href="https://paladini.io/harness-score/guide/maturity-model#l0-%C2%B7-unharnessed" title="Harness Score — AI coding harness maturity"><img alt="Harness Score L0 (Unharnessed): measures AI-assisted development harness maturity with harness-score" src="https://paladini.github.io/harness-score/maturity/badge-l0.svg" height="20"></a>

## Overview

Este projeto utiliza a biblioteca `aa-daily-reflections` para fazer scraping de todas as reflexões diárias do Alcoólicos Anônimos em inglês, francês e espanhol para um ano específico.

## Características

- ✅ **Scraper unificado**: Um único scraper que aceita diferentes idiomas como parâmetro
- ✅ **Múltiplos formatos de export**: JSON, CSV e SQLite database
- ✅ **Rate limiting**: Pequenos delays entre requisições para não sobrecarregar a API
- ✅ **Logs detalhados**: Acompanhe o progresso do scraping
- ✅ **TypeScript**: Totalmente tipado

## 📄 Formatos de Saída

O scraper exporta as reflexões diárias em múltiplos formatos:

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
- `reflections.db` - Contém todas as reflexões em um banco estruturado

Todos os arquivos são gerados no diretório `/data`.

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
