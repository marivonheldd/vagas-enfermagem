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
  diasNoSite: 30,   // vagas mais antigas que isso somem do site sozinhas

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
  { cargo:"Enfermeiro(a) Validador(a) Clínico(a) – PJ", empresa:"OM30", cidade:"100% remoto", uf:"REMOTO", tipo:"Emprego", postado:"2026-11-16 21:10", link:"https://atracaodetalentos.totvs.app/om30/227/enfermeiro-a-validador-a-clinico-a?applicationSource=0" },
  { cargo:"Enfermeiro(a) Analista de Implantação Hospitalar – PJ (híbrido)", empresa:"OM30", cidade:"São Paulo", uf:"SP", tipo:"Emprego", postado:"2026-11-16 21:10", link:"https://atracaodetalentos.totvs.app/om30/226/enfermeiro-a-analista-de-implantacao-hospitalar?applicationSource=0" },
  { cargo:"Enfermeiro(a) da Qualidade – Atenção Primária", empresa:"Fundação do ABC", cidade:"São Paulo", uf:"SP", tipo:"Emprego", postado:"2026-11-16 21:10", link:"https://www.reachr.com.br/vaga/fundacao-abc/enfermeira-o/35999/sao-paulo/sp/presencial" },
  { cargo:"Enfermeiro(a) de Internação", empresa:"Hospital Santa Helena", cidade:"Goiânia", uf:"GO", tipo:"Emprego", postado:"2026-11-16 08:00", link:"https://www.jobbol.com.br/vaga/163631-enfermeiro-de-internacao?cidade=5418&utm_source=LinkedIn&utm_medium=organic&utm_campaign=LinkedIn&src=LinkedIn_JobSource" },
  { cargo:"Enfermeiro(a) Auditor(a)", empresa:"Hospital Santa Helena", cidade:"Goiânia", uf:"GO", tipo:"Emprego", postado:"2026-11-16 08:00", link:"https://www.jobbol.com.br/vaga/163635-enfermeiro-auditor?cidade=5418&utm_source=LinkedIn&utm_medium=organic&utm_campaign=LinkedIn&src=LinkedIn_JobSource" },
  { cargo:"Técnico(a) de Enfermagem de Internação", empresa:"Hospital Santa Helena", cidade:"Goiânia", uf:"GO", tipo:"Emprego", postado:"2026-11-16 08:00", link:"https://www.jobbol.com.br/vaga/163640-tecnico-de-enfermagem-de-internacao?cidade=5418&utm_source=LinkedIn&utm_medium=organic&utm_campaign=LinkedIn&src=LinkedIn_JobSource" },
  { cargo:"Enfermeiro(a) – Unidade de Internação", empresa:"Hospital São Lucas", cidade:"Ribeirão Preto", uf:"SP", tipo:"Emprego", postado:"2026-11-16 08:00", link:"https://saolucashospital.gupy.io/job/eyJqb2JJZCI6MTI4ODI3NjUsInNvdXJjZSI6ImxpbmtlZGluIn0=?jobBoardSource=linkedin" },
  { cargo:"Enfermeiro(a) Supervisor(a) Administrativo(a)", empresa:"BSL Saúde (Brazil Senior Living)", cidade:"São Paulo", uf:"SP", tipo:"Emprego", postado:"2026-11-16 21:10", link:"https://brazilseniorliving.pandape.infojobs.com.br/Detail/3934639?ov=6&xtor=AL-366332662&utm_source=linkedin&utm_medium=referral&utm_campaign=feed&utm_term=organic&utm_content=ats" },
  { cargo:"Enfermeiro(a) do Trabalho", empresa:"HealthBit", cidade:"São Paulo", uf:"SP", tipo:"Emprego", postado:"2026-11-16 21:10", link:"https://jobs.quickin.io/healthbit/jobs/6afb5f263909ff0013d40252?src=LinkedIn%20Limited%20Listings" },
  { cargo:"Enfermeiro(a) – Semi-Intensiva Pós-Operatório", empresa:"Rede D'Or · Clínica São Vicente", cidade:"Rio de Janeiro", uf:"RJ", tipo:"Emprego", postado:"2026-10-28 08:00", link:"https://rededor.gupy.io/job/eyJqb2JJZCI6MTI4MDIwMTQsInNvdXJjZSI6ImxpbmtlZGluIn0=?jobBoardSource=linkedin" },
  { cargo:"Técnico(a) de Enfermagem – Terapia Infusional", empresa:"Unimed Juiz de Fora", cidade:"Juiz de Fora", uf:"MG", tipo:"Emprego", postado:"2026-11-16 08:00", link:"https://unimedjf.gupy.io/job/eyJqb2JJZCI6MTI4OTg5MDAsInNvdXJjZSI6ImxpbmtlZGluIn0=?jobBoardSource=linkedin" },
  { cargo:"Técnico(a) em Enfermagem do Trabalho", empresa:"BEECORP – Bem Estar Corporativo", cidade:"Patos de Minas", uf:"MG", tipo:"Emprego", postado:"2026-11-16 14:10", link:"https://www.linkedin.com/jobs/view/4490112107/" },
  { cargo:"Técnico(a) de Enfermagem – Ala 100 (19h às 7h)", empresa:"Santa Casa de Ponta Grossa", cidade:"Ponta Grossa", uf:"PR", tipo:"Emprego", postado:"2026-11-16 09:10", link:"https://www.linkedin.com/jobs/view/4490609457/" },
];
