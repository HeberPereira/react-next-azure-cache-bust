# Next.js + Azure Web App demo

Este projeto demonstra:

* **Cache busting** automático via `generateBuildId` + `VersionWatcher`
* Deploy contínuo no **Azure App Service (Web App for Linux)** usando GitHub Actions

## Pré-requisitos

* Conta Azure + Web App Linux configurado para **Node 20 LTS**
* Chave de _publish profile_ exportada como `AZURE_WEBAPP_PUBLISH_PROFILE` (secret do repositório)
* Nome do Web App exportado como `AZURE_WEBAPP_NAME`

## Passos rápidos

```bash
# 1. Instalar dependências
npm install

# 2. Rodar local
npm run dev

# 3. Build local (gera /public/build.json automaticamente)
npm run build && npm start
```

### Deploy manual (zip)

```bash
zip -r app.zip .
az webapp deploy --resource-group <RG> --name <APPNAME> --type zip --src-path app.zip
```

### Deploy automático

1. Crie um repositório GitHub e envie o código.
2. Adicione os secrets `AZURE_WEBAPP_NAME` e `AZURE_WEBAPP_PUBLISH_PROFILE`.
3. `git push main` → o GitHub Action `azure-webapp.yml` compila e publica.

Após o deploy, qualquer guia aberta no navegador fará _auto‑reload_ em até 30 s quando detectar nova versão.


## Exibir versão no rodapé

Já incluso um componente `BuildTag` que mostra a `buildId` no rodapé (ex.: `v1716390000000`).  
Útil para depuração — você sabe exatamente qual deploy está rodando no browser.
