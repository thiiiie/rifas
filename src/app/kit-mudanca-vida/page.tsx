import Image from "next/image";
import { FiCheckCircle, FiMenu } from "react-icons/fi";
import { MdHideImage } from "react-icons/md";
import { PRICE_KIT } from "../constants";

export default function KitMudancaVida() {
  return (
    <div className="flex flex-col items-center pb-20">
      <header className="w-full fixed top-0 left-0 z-10 flex items-center justify-between p-6 bg-header-background text-header-foreground text-3xl">
        <Image className="w-20 h-auto" width={200} height={100} src="/logo.png" alt="logo imagem" />

        <FiMenu />
      </header>


      <div className="relative top-12 w-full h-[100px] bg-header-background" />
      <main className="relative top-5 max-w-[600px] w-full bg-rifa-background p-4 rounded-2xl">
        <section className="bg-background rounded-2xl">
          <Image className="rounded-2xl w-full aspect-[5/4] object-cover rounded-b-none" width={600} height={600} priority src="/caminhao.jpeg" alt="imagem do produto" />

          <div className="p-4">
            <h1 className="text-md font-medium leading-5">KIT MUDANÇA DE VIDA MILIONÁRIA (881)</h1>
            <p className="text-xs text-gray-600">Imagina ganhar 1 KIT MUDANÇA DE VIDA MILIONÁRIA com apenas 6,99 centavos ?</p>
            <p className="mt-2 px-2 py-1 rounded-lg bg-green-700 font-extrabold text-xs w-fit text-white animate-pulse">Adquira já!</p>
          </div>
        </section>

        <p className="text-center flex items-center justify-center gap-2 text-sm mt-2">
          Por Apenas
          <span className="p-2 bg-selectButton-background text-selectButton-foreground rounded-lg font-bold">
            {
              PRICE_KIT.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })
            }
          </span>
        </p>

        <div className="mt-2 rounded-lg p-2 bg-green-600 flex items-center gap-2">
          <div className="text-3xl text-slate-400 bg-background roundedl-xl h-14 w-14 rounded-lg flex items-center justify-center">
            <MdHideImage />
          </div>
          
          <div className="flex flex-col">
            <h1 className="flex items-center text-white font-bold gap-2">Douglas Silva <FiCheckCircle /></h1>
            <p className="text-xs text-slate-100">Ganhador(a) com o número da sorte <strong className="text-white">806695</strong></p>
          </div>
        </div>

        <section className="mt-2 py-4 px-2 flex flex-col gap-4 text-sm bg-background rounded-xl">
          <h2>CONDIÇÕES DE PARTICIPAÇÃO </h2>

          <p>O GÊMEOS BRASIL V.89 é um Título de Capitalização da Modalidade Filantropia Premiável, de pagamento único, emitido pela VIA CAPITALIZAÇÃO S.A. (VIACAP), Sociedade de Capitalização inscrita no CNPJ sob o Número 88.076.302/0001-94, com sede na Av. Carlos Gomes, 222, Conj. 901, Bairro Boa Vista, Porto Alegre/RS, CEP 90480-000. <strong>A contratação deste título é apropriada principalmente na hipótese de o consumidor estar interessado em contribuir com entidades beneficentes de assistência sociais, certificadas nos termos da legislação vigente, e participar de sorteio(s)</strong>. Ao adquirir o GÊMEOS BRASIL V.89 você concorrerá aos sorteios previstos neste Título e 100% do direito de resgate do seu Título será revertido à FEDERAÇÃO NACIONAL DAS ASSOCIAÇÕES PESTALOZZI - FENAPESTALOZZI, Entidade Filantrópica inscrita no CNPJ sob o Número 42.129.809/0001-68, com sede na ST SRTVS, 110, Quadra 701, Bloco O, Salas 496 e 497, Asa Sul, Brasília/DF, CEP 70.340-000, para utilização dos recursos em seus projetos de assistência social e nas diversas atividades da entidade, caso não haja comunicação contrária à Sociedade de Capitalização. Conheça mais sobre o trabalho e os projetos da FEDERAÇÃO NACIONAL DAS ASSOCIAÇÕES PESTALOZZI - FENAPESTALOZZI através do site www.fenapestalozzi.org.br. É obrigatório o preenchimento correto da Ficha de Cadastro no momento de aquisição do título. Antes de contratar, consulte previamente as Condições Gerais do Título, cuja versão completa está disponível para consulta no site www.susep.gov.br. Este Título de Capitalização foi aprovado pela Superintendência de Seguros Privados – SUSEP – através do Processo SUSEP nº 15414.652275/2023-33. 1 – SORTEIOS: Ao adquirir o GÊMEOS BRASIL V.89 o Subscritor irá concorrer aos Sorteios da Modalidade &quot;Loteria Federal&quot;. Você concorre em 1 sorteio apurado com base na extração da Loteria Federal do dia 30/12/2023. Para concorrer aos sorteios previstos nesta modalidade o Título contém impresso 1 Número(s) da Sorte, não repetido(s) na mesma série, compreendido(s) no intervalo entre &quot;000.000&quot; e &quot;999.999&quot;. Para efeito de apuração, ao menos um Número da Sorte impresso no título deverá coincidir, com o número formado pela combinação do primeiro prêmio da extração da Loteria Federal, adicionando-se ao seu final o primeiro algarismo do segundo prêmio da Loteria Federal. Regra de Aproximação: Caso a combinação contemplada, apurada na forma, não tenha sido distribuída a um participante será aplicada a seguinte regra de aproximação: será contemplado o participante que possuir o próximo Número da Sorte imediatamente superior ao efetivamente apurado, na forma acima, e assim sucessivamente até que seja identificado um participante contemplado em cada uma das premiações acima. Caso, por qualquer motivo, a Loteria Federal não venha a realizar a extração na data prevista de sorteio, será considerada, para fins do disposto neste Capítulo, a extração seguinte que vier a ser por ela realizada. Caso a Caixa Econômica Federal suspenda definitivamente as extrações da Loteria Federal do Brasil, ou modifique as referidas extrações de forma que não mais coincidam com as regras deste sorteio, ou haja qualquer impedimento à vinculação da Loteria Federal aos sorteios previstos, a VIA Capitalização S.A, num prazo máximo de trinta dias, promoverá o sorteio não realizado com aparelhos próprios e em local de livre acesso ao público, sob fiscalização de auditoria independente e em idênticas condições às previstas originalmente no título, dando prévia e ampla divulgação do fato. <strong>Os Títulos sorteados em todas as premiações descritas anteriormente serão resgatados antecipadamente quando da realização do respectivo sorteio e não concorrerão aos próximos sorteios. 2 – SÉRIES E PROBABILIDADES:</strong> Os Títulos são ordenados em séries de 1.000.000 unidades e a probabilidade mínima de contemplação, considerando todos os Títulos da série, será igual a uma chance em 1.000.000 para cada um dos sorteios previstos neste Título. O percentual de 42,72900% do valor da contribuição única do Título é destinado à capitalização, que irá gerar um capital mínimo de resgate igual a 42,86584%, ao fim da vigência. O valor de 42,71817% da contribuição única do Título é destinado ao sorteio. Os custos com promoção de distribuição do Título estão abrangidos pela quota de carregamento, que é de 14,55283%, e representam 1% da contribuição única, podendo haver remuneração adicional, de acordo com a performance do produto, conforme previsto em contrato de distribuição. <strong>3 – VIGÊNCIA:</strong> A vigência do Título é de 2 meses. <strong>4 – RESGATE:</strong> O valor do resgate estará disponível ao Titular do direito de resgate após 2 meses de carência. <strong>5 – DATA, HORA E LOCAL DOS SORTEIOS:</strong> Os sorteios serão realizados com base na extração da Loteria Federal do dia 30/12/2023, na hora e local divulgados pela Caixa Econômica Federal. <strong>6 – PRÊMIOS:</strong> Para o recebimento do prêmio, quando contemplado, o Subscritor deverá apresentar o Título original contemplado ou o comprovante de aquisição pelo aplicativo/site; RG e CPF válidos; comprovante de residência atualizado e os dados bancários para depósito. O valor dos prêmios descritos é líquido de imposto de renda. A VIACAP pagará a premiação em até 15 (quinze) dias corridos, contados da apresentação da documentação exigida. <strong>7 – DISPOSIÇÕES GERAIS:</strong> A aquisição implica automática adesão às Condições Gerais do Título, das quais o Subscritor declara ter tomado ciência previamente a aquisição. Os direitos e obrigações decorrentes deste Título prescrevem no prazo estabelecido na legislação. Na hipótese de extravio do Título, a responsabilidade será exclusivamente do Subscritor. O foro competente para dirimir eventuais questões oriundas do presente Regulamento será o do domicílio do Subscritor. É proibida a venda de título de capitalização a menores de dezesseis anos. A aprovação deste plano pela SUSEP, não implica, por parte da Autarquia, em incentivo ou recomendação à sua aquisição, representando, exclusivamente, sua adequação às normas em vigor. Os dados pessoais acessados em razão da contratação deste título de capitalização serão tradados nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Para mais informações consulte o <strong>SAC: 0800 740 7819</strong>. OUVIDORIA: 0800 703 1989.</p>

          <p>PREMIAÇÃO: KIT MUDANÇA DE VIDA MILIONÁRIA (881)</p>

          <p>1º PRÊMIO: 3 CAMINHÃO + 3 SEMI-REBOQUE + 10 VOYAGE + 10 GOL + 4 HB20 + 3 CRONOS + 3 ARGO. (Premiação total: 2.239.500,00).</p>

          <p>CONFORME DETALHADO NAS CONDIÇÕES DE PARTICIPAÇÃO.</p>

          <p>SUGESTÃO DE USO DO PRÊMIO LÍQUIDO TOTAL DE R$ 2.239.500,00</p>
        </section>
      </main>
    </div>
  );
}
