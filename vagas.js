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
  { cargo:"Estágio em Enfermagem – Ambulatório Especializado", empresa:"Santa Casa BH", cidade:"Belo Horizonte", uf:"MG", tipo:"Estágio", postado:"2026-11-11 08:00", link:"https://santacasabh.gupy.io/job/eyJqb2JJZCI6MTI4NDcxODgsInNvdXJjZSI6ImxpbmtlZGluIn0=?jobBoardSource=linkedin" },
  { cargo:"Estágio em Enfermagem – Ambulatório de Oncologia", empresa:"Grupo Orizonti", cidade:"Belo Horizonte", uf:"MG", tipo:"Estágio", postado:"2026-11-11 08:00", link:"https://grupoorizonti.gupy.io/job/eyJqb2JJZCI6MTI4NjQ4NDIsInNvdXJjZSI6ImxpbmtlZGluIn0=?jobBoardSource=share_link" },
  { cargo:"Estágio em Enfermagem – CME", empresa:"Hospital Urológica", cidade:"Belo Horizonte", uf:"MG", tipo:"Estágio", postado:"2026-11-13 21:00", link:"https://www.linkedin.com/jobs/view/4491036090/" },
  { cargo:"Estágio em Enfermagem – Hospital São Carlos", empresa:"Rede D'Or", cidade:"Fortaleza", uf:"CE", tipo:"Estágio", postado:"2026-11-13 21:00", link:"https://www.linkedin.com/jobs/view/4435120854/" },
  { cargo:"Estágio em Enfermagem – Banco de Talentos", empresa:"Rede D'Or", cidade:"Recife", uf:"PE", tipo:"Estágio", postado:"2026-11-13 21:00", link:"https://www.linkedin.com/jobs/view/4455960615/" },
  { cargo:"Estágio em Gestão da Qualidade (hospital)", empresa:"Hospital Santa Helena", cidade:"Goiânia", uf:"GO", tipo:"Estágio", postado:"2026-11-16 08:00", link:"https://www.jobbol.com.br/vaga/163629-estagiario-na-area-de-gestao-da-qualidade?cidade=5418&utm_source=LinkedIn&utm_medium=organic&utm_campaign=LinkedIn&src=LinkedIn_JobSource" },
];
