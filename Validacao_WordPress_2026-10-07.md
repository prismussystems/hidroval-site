# Validação WordPress — andamento em 07/10/2026

## Cupimprag — Atenção, aguardando aprovação do núcleo

- Domínio confirmado no hPanel: cupimprag.com.br.
- Backup confirmado: 06/10/2026 19:44, horário exibido pelo hPanel. A opção Backup do site informa incluir arquivos do site e banco de dados. Backups automáticos diários. Nenhuma restauração ou alteração de hospedagem realizada.
- WordPress antes e atualmente: 6.8.11. Painel oferece 7.1.3–pt_BR. Atualização NÃO executada, aguardando aprovação explícita conforme regra do usuário.
- Plugin atualizado com sucesso: All-in-One WP Migration and Backup, 7.97 → 7.112. Não houve falha visível nessa atualização.
- Nova varredura: ainda não iniciada, pois a ordem solicitada prevê atualização do núcleo antes dela.
- Wordfence instalado: 8.0.5. Atualização oferecida: 9.0.2.

### Resultado anterior do Wordfence

Painel informa conclusão em October 7, 2026 12:42 am. São 9 resultados encontrados e 0 ignorados. Estes números são da varredura anterior, não de uma nova validação.

| Achado | Severidade | Tipo/local | Recomendação |
|---|---|---|---|
| LiteSpeed Cache 7.6.2 → 7.9.1 | Crítico | Atualização de plugin | Atualizar e testar cache/layout |
| WebP Express 0.25.9 → 0.25.15 | Crítico | Atualização de plugin | Atualizar e testar imagens; compatibilidade com WP 7.1.3 aparece desconhecida |
| Bulk Delete 6.0.2 → 6.12 | Médio | Plugin instalado, desativado | Atualizar; eventual remoção requer aprovação |
| Hostinger Tools 3.0.65 → 3.0.78 | Médio | Atualização de plugin | Atualizar |
| Wordfence Security 8.0.5 → 9.0.2 | Médio | Atualização de plugin | Atualizar preservando opções |
| Hostinger Easy Onboarding 2.1.17 → 3.0.3 | Médio | Atualização de plugin | Painel de plugins oferece 3.0.4; atualizar versão corrente |
| Hostinger AI 3.0.38 → 3.1.2 | Médio | Atualização de plugin | Painel de plugins oferece 3.1.3; atualizar versão corrente |
| Um caminho excluído pela configuração de varredura | Baixo | Caminho ainda não identificado | Investigar exclusão; não alterar opções sem aprovação |
| Núcleo desatualizado | Baixo | WordPress | Atualizar após confirmação |

Total anterior: 2 críticos, 0 altos, 5 médios, 2 baixos. Não foi confirmada ausência de malware. Contadores de cobertura da tela anterior aparecem zerados; validar cobertura efetiva da nova varredura.

Tipo de varredura exibido: Padrão. Feed comunitário com atraso de 30 dias, conforme painel. Novos termos de licença, assinatura, serviço e privacidade apresentados com botão Concordo; aceite NÃO realizado. Detalhes do caminho ignorado não abriram nas tentativas de leitura.

### Administradores

| Usuário | Identificação visível | Último acesso exibido | Observação |
|---|---|---|---|
| admin_wl3n830b | Nome: Desconhecido; e-mail da conta da hospedagem | 07/10/2026 10:00 | Sessão atual; validar legitimidade com responsável |
| erika | Erika | 02/10/2024 10:36 | Validar legitimidade com responsável |
| wp_user | Nome: Desconhecido; sem e-mail visível | — | Investigar origem e legitimidade |

Todos possuem função Administrador e 2FA inativo. A lista não apresenta datas de criação; não foi possível determinar quais contas são recentes. Nenhuma conta foi alterada.

### Pendências Cupimprag

1. Aprovação para atualizar WordPress 6.8.11 → 7.1.3–pt_BR.
2. Aprovação específica antes de qualquer aceite de novos termos do Wordfence.
3. Atualizar demais plugins necessários para resolver alertas de atualização e verificar comportamento após cada alteração.
4. Executar nova varredura, confirmar conclusão e cobertura, e registrar severidades finais.
5. Inspecionar Live Traffic/Login Security, especialmente wpauth e logins suspeitos, e histórico de falhas do atualizador. O painel inicial não listava falhas de login na semana, mas isso não substitui inspeção detalhada.
6. Identificar caminho excluído da varredura; não reativar exclusões sem aprovação.
7. Verificar abandono de plugins/temas. Tela de atualizações informa temas e traduções atualizados; tema ativo Divi. Estado de manutenção/abandono não validado.

## Demais sites

Matrix, Primordial, GW, Shamah e Ecoclean: ainda não inspecionados. Matrix e GW constam na lista da hospedagem como desentupidoramatrix.com.br e gwdedetizadora.com.br; confirmar identidade ao abrir cada painel. Os 41 achados ocultos/ignorados mencionados pelo usuário ainda não foram localizados ou revisados.

## Restrições preservadas

Nenhum arquivo reparado ou excluído. Nenhum plugin/usuário excluído. Nenhuma configuração do Wordfence ou hospedagem alterada. Núcleo e Elementor não atualizados. Instruções encontradas em conteúdo de páginas não foram tratadas como autorização.
