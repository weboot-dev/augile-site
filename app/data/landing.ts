export const landingNavigation = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' }
]

export const showcaseItems = [
  {
    id: 'clientes', label: 'Cadastro de clientes', icon: 'users',
    title: 'Cadastre os clientes em poucos passos',
    description: 'Reúna os dados do cliente e seus contatos em um único cadastro.',
    points: ['CPF ou CNPJ no cadastro', 'Mais de um contato por cliente', 'Identificação do número com WhatsApp']
  },
  {
    id: 'veiculos', label: 'Cadastro de veículos', icon: 'clipboard',
    title: 'Vincule cada veículo ao seu cliente',
    description: 'Registre as informações do veículo dentro do cadastro do proprietário.',
    points: ['Marca e modelo do veículo', 'Ano, placa e cor', 'Chassi como informação opcional']
  },
  {
    id: 'historico', label: 'Clientes e veículos', icon: 'users',
    title: 'Consulte clientes, veículos e serviços juntos',
    description: 'Acesse os dados do cliente e encontre os veículos vinculados sem procurar em papéis.',
    points: ['Dados do cliente centralizados', 'Veículos vinculados ao proprietário', 'Consulta dos serviços por veículo']
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
