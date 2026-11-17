/* =====================================================================
   VAGAS DO SITE — @enfmarivonheld
   Este é o ÚNICO arquivo que muda no dia a dia.
   Depois de editar no GitHub, clique em "Commit changes":
   a Vercel atualiza o site sozinha em ~1 minuto.
   ===================================================================== */

/* =========================================================
   ⚙️  CONFIGURAÇÕES — SÓ MEXA AQUI
   ========================================================= */
const CONFIG = {
  whatsapp: "5521990209882",   // seu WhatsApp: DDI + DDD + número, só números
  mensagemCurriculo: "Oi! Vi as vagas no seu site e quero ajuda com meu currículo 🙏",
  diasNoSite: 15,   // vagas mais antigas que isso somem do site sozinhas

  // 🛒 PRODUTOS — troque preço (só número) e link da Kiwify
  produtos: {
    primeiro: { nome:"Meu Primeiro Currículo", preco:47.90, link:"https://pay.kiwify.com.br/UUEryQV" },
    impacto:  { nome:"Currículo de Impacto",   preco:197.90, link:"https://pay.kiwify.com.br/sCqALdS" },
  },
};

/* =========================================================
   📋  VAGAS — copie um bloco { ... }, cole e edite.
   tipo:    "Estágio" ou "Emprego"
   uf:      sigla do estado (MS, SP, PE...) ou "REMOTO"
   postado: data e hora em que você postou → "AAAA-MM-DD HH:MM"
            (é isso que faz o contador e o selo 🔥 das 24h funcionarem)
   ========================================================= */
const VAGAS = [
  { cargo:"Enfermeiro(a) Assistencial – UTI Adulto", empresa:"Hospital Regional", cidade:"Campo Grande", uf:"MS", tipo:"Emprego", postado:"2026-11-16 18:40", link:"https://exemplo.com/1" },
  { cargo:"Estágio em Enfermagem – Clínica Médica", empresa:"Santa Casa", cidade:"Cuiabá", uf:"MT", tipo:"Estágio", postado:"2026-11-16 09:15", link:"https://exemplo.com/2" },
  { cargo:"Enfermeiro(a) de Pronto Atendimento", empresa:"Rede de Clínicas", cidade:"Goiânia", uf:"GO", tipo:"Emprego", postado:"2026-11-14 10:00", link:"https://exemplo.com/3" },
  { cargo:"Estágio Remunerado – Saúde Coletiva", empresa:"Secretaria de Saúde", cidade:"Brasília", uf:"DF", tipo:"Estágio", postado:"2026-11-15 21:30", link:"https://exemplo.com/4" },
  { cargo:"Enfermeiro(a) Trainee", empresa:"Grupo Hospitalar", cidade:"São Paulo", uf:"SP", tipo:"Emprego", postado:"2026-11-16 12:05", link:"https://exemplo.com/5" },
  { cargo:"Estágio em Enfermagem – Centro Cirúrgico", empresa:"Hospital Particular", cidade:"Belo Horizonte", uf:"MG", tipo:"Estágio", postado:"2026-11-13 08:00", link:"https://exemplo.com/6" },
  { cargo:"Enfermeiro(a) Obstetra", empresa:"Maternidade", cidade:"Rio de Janeiro", uf:"RJ", tipo:"Emprego", postado:"2026-11-12 14:20", link:"https://exemplo.com/7" },
  { cargo:"Enfermeiro(a) da Estratégia Saúde da Família", empresa:"Processo Seletivo Municipal", cidade:"Londrina", uf:"PR", tipo:"Emprego", postado:"2026-11-16 07:50", link:"https://exemplo.com/8" },
  { cargo:"Estágio em Enfermagem – Pediatria", empresa:"Hospital Infantil", cidade:"Porto Alegre", uf:"RS", tipo:"Estágio", postado:"2026-11-15 16:10", link:"https://exemplo.com/9" },
  { cargo:"Enfermeiro(a) Home Care", empresa:"Atenção Domiciliar", cidade:"Recife", uf:"PE", tipo:"Emprego", postado:"2026-11-16 15:30", link:"https://exemplo.com/10" },
  { cargo:"Estágio em Enfermagem – Emergência", empresa:"Hospital Geral", cidade:"Fortaleza", uf:"CE", tipo:"Estágio", postado:"2026-11-11 11:00", link:"https://exemplo.com/11" },
  { cargo:"Enfermeiro(a) Assistencial", empresa:"Hospital Universitário", cidade:"Belém", uf:"PA", tipo:"Emprego", postado:"2026-11-16 10:45", link:"https://exemplo.com/12" },
  { cargo:"Enfermeiro(a) de Telessaúde", empresa:"Healthtech", cidade:"100% remoto", uf:"REMOTO", tipo:"Emprego", postado:"2026-11-16 17:00", link:"https://exemplo.com/13" },
];
