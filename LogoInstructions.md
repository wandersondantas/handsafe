# 📋 Instruções para o Logo

## Como Adicionar Seu Logo

1. **Prepare seu arquivo de logo:**
   - Nome do arquivo: `logo.png`
   - Formato: PNG (preferencialmente com fundo transparente)
   - Dimensões recomendadas: 400x160 pixels (proporção 5:2)

2. **Coloque o logo na pasta:**
   ```
   pasta-do-projeto/
   ├── index.html
   ├── style.css
   ├── script.js
   ├── logo.png  ← Seu logo aqui
   └── README.md
   ```

3. **O sistema automaticamente:**
   - Ajustará o tamanho do logo para caber no cabeçalho
   - Manterá a proporção original
   - Adaptará para diferentes tamanhos de tela

## Especificações Técnicas

### Desktop
- Tamanho máximo de exibição: 200px de largura x 80px de altura
- O logo será centralizado no cabeçalho
- Aparecerá acima do título principal

### Mobile
- Tamanho máximo de exibição: 150px de largura x 60px de altura
- O logo manterá a centralização
- Será redimensionado proporcionalmente

## Dicas de Design

✅ **Recomendado:**
- Logos horizontais ou quadrados funcionam melhor
- Fundo transparente para melhor integração
- Cores que contrastem com o fundo azul do cabeçalho
- Formato vetorial convertido para PNG em alta resolução

❌ **Evite:**
- Logos muito verticais (podem ficar distorcidos)
- Arquivos muito grandes (>500KB)
- Logos com texto muito pequeno (pode ficar ilegível)
- Imagens de baixa qualidade

## Exemplo de Estrutura do Logo

```
+----------------------------------+
|                                  |
|         [SEU LOGO AQUI]         |
|                                  |
+----------------------------------+
|  Sistema de Prontuário Eletrónico |
|  Check-in Digital de Higienização  |
+----------------------------------+
```

## Troubleshooting

**Problema:** Logo não aparece
- Verifique se o arquivo se chama exatamente `logo.png`
- Confirme que está na mesma pasta do `index.html`
- Tente atualizar a página (Ctrl+F5)

**Problema:** Logo aparece distorcido
- Verifique as dimensões originais do arquivo
- Mantenha proporção próxima de 5:2 (largura:altura)
- Use um editor de imagem para ajustar antes de salvar

**Problema:** Logo muito pequeno/grande
- O tamanho é ajustado automaticamente
- Se precisar de controle manual, edite as classes `.logo-image` no arquivo `style.css`

## Personalizações Avançadas

Se precisar modificar o comportamento do logo, edite o arquivo `style.css`:

```css
.logo-image {
    max-width: 200px;      /* Ajuste a largura máxima */
    max-height: 80px;      /* Ajuste a altura máxima */
    width: auto;
    height: auto;
    object-fit: contain;
}
```

---

**Dúvidas?** Consulte o README.md para mais informações sobre o sistema.
