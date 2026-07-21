export const landingNavigation = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' }
]

export const showcaseItems = [
  {
    id: 'ordens', label: 'Ordens de serviço', icon: 'clipboard',
    title: 'Acompanhe cada serviço do início ao fim',
    description: 'Centralize as ordens e encontre rapidamente o que precisa de atenção.',
    points: ['Status do serviço em um só lugar', 'Dados do cliente e do veículo ligados à OS', 'Rotina mais clara para a equipe']
  },
  {
    id: 'clientes', label: 'Clientes e veículos', icon: 'users',
    title: 'Consulte o histórico sem procurar em papéis',
    description: 'Mantenha os dados de clientes e veículos organizados para o próximo atendimento.',
    points: ['Cadastro centralizado', 'Veículos vinculados ao cliente', 'Histórico fácil de localizar']
  },
  {
    id: 'agenda', label: 'Agenda', icon: 'calendar',
    title: 'Tenha uma visão clara dos atendimentos do dia',
    description: 'Organize os compromissos da oficina e reduza desencontros na rotina.',
    points: ['Visão dos atendimentos', 'Consulta rápida da rotina', 'Mais previsibilidade no dia']
  },
  {
    id: 'servicos', label: 'Serviços', icon: 'wrench',
    title: 'Prepare orçamentos com mais agilidade',
    description: 'Cadastre os serviços usados pela oficina e reutilize as informações.',
    points: ['Serviços padronizados', 'Menos digitação repetida', 'Atendimento mais ágil']
  }
] as const

export const faqItems = [
  { question: 'O plano gratuito tem prazo para acabar?', answer: 'Não. O plano Gratuito é disponibilizado sem prazo para acabar, respeitando os limites apresentados na seção de planos.' },
  { question: 'Preciso cadastrar cartão para começar?', answer: 'Não. O cadastro do plano Gratuito e o início do teste não pedem cartão.' },
  { question: 'O que acontece depois dos 14 dias de teste?', answer: 'Essa regra não está descrita no site nem no contrato disponível para a landing. Confirme com o suporte antes de iniciar o teste.' },
  { question: 'Posso mudar de plano depois?', answer: 'A Augile apresenta planos para diferentes momentos da oficina. As regras de troca ainda precisam ser confirmadas com o suporte.' },
  { question: 'Meus dados ficam salvos se eu mudar de plano?', answer: 'A regra de retenção de dados ao trocar de plano não está documentada neste projeto. O suporte pode confirmar como funciona para o seu caso.' },
  { question: 'Como recebo o acesso?', answer: 'Depois do cadastro, o link de acesso e o código para entrar são enviados pelo WhatsApp informado.' },
  { question: 'A Augile funciona no celular?', answer: 'Sim. O acesso é feito pela web e a interface pode ser usada no celular.' }
] as const
