import Image from "next/image";
import { products } from "../constants";
import { RifaForm } from "@/components/RifaForm";
import { Header } from "@/components/Header";

export default function KitMudancaVida() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <main className="relative -top-2 max-w-[600px] w-full bg-rifa-background p-4 rounded-2xl">
        <section className="bg-background rounded-2xl">
          <Image className="rounded-2xl w-full aspect-[5/4] object-cover rounded-b-none" width={600} height={600} priority src={products.kitMilionario.image} alt="imagem do produto" />

          <div className="p-4">
            <h1 className="text-md font-medium leading-5">{products.kitMilionario.name}</h1>
            <p className="text-xs text-gray-600">Imagina ganhar KIT MILIONÁRIO com apenas 3,49 centavos ?</p>
            <p className="mt-2 px-2 py-1 rounded-lg bg-green-700 font-extrabold text-xs w-fit text-white animate-pulse">Adquira já!</p>
          </div>
        </section>

        <p className="text-center flex items-center justify-center gap-2 text-sm mt-2">
          Por Apenas
          <span className="p-2 bg-selectButton-background text-selectButton-foreground rounded-lg font-bold">
            {
              products.kitMilionario.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })
            }
          </span>
        </p>

        {/* <div className="mt-2 rounded-lg p-2 bg-green-600 flex items-center gap-2">
          <div className="text-3xl text-slate-400 bg-background roundedl-xl h-14 w-14 rounded-lg flex items-center justify-center">
            <MdHideImage />
          </div>
          
          <div className="flex flex-col">
            <h1 className="flex items-center text-white font-bold gap-2">Douglas Silva <FiCheckCircle /></h1>
            <p className="text-xs text-slate-100">Ganhador(a) com o número da sorte <strong className="text-white">806695</strong></p>
          </div>
        </div> */}

        <p className="mt-2 text-center bg-background p-2 rounded-xl text-sm font-medium text-gray-500">
          Quanto mais títulos comprar, maiores são as suas chances de ganhar!
        </p>

        <RifaForm productId={products.kitMilionario.id} price={products.kitMilionario.price} minQuantity={2} />

        <section className="mt-2 py-4 px-2 flex flex-col gap-4 text-sm bg-background rounded-xl max-h-[300px] overflow-auto">
          O GÊMEOS BRASIL VE.82 é um Título de Capitalização da Modalidade Filantropia Premiável, de pagamento único, emitido pela VIA CAPITALIZAÇÃO S.A. (VIACAP), Sociedade de Capitalização inscrita no CNPJ sob o Número 88.076.302/0001-94, com sede na Av. Carlos Gomes, 222, Conj. 901, Bairro Boa Vista, Porto Alegre/RS, CEP 90480-000. A contratação deste título é apropriada principalmente na hipótese de o consumidor estar interessado em contribuir com entidades beneficentes de assistência sociais, certificadas nos termos da legislação vigente, e participar de sorteio(s). Ao adquirir o GÊMEOS BRASIL VE.82 você concorrerá aos sorteios previstos neste Título e 100% do direito de resgate do seu Título será revertido à FEDERAÇÃO NACIONAL DAS ASSOCIAÇÕES PESTALOZZI - FENAPESTALOZZI, Entidade Filantrópica inscrita no CNPJ sob o Número 42.129.809/0001-68, com sede na ST SRTVS, 110, Quadra 701, Bloco O, Salas 496 e 497, Asa Sul, Brasília/DF, CEP 70.340-000, para utilização dos recursos em seus projetos de assistência social e nas diversas atividades da entidade, caso não haja comunicação contrária à Sociedade de Capitalização. Conheça mais sobre o trabalho e os projetos da FEDERAÇÃO NACIONAL DAS ASSOCIAÇÕES PESTALOZZI - FENAPESTALOZZI através do site www.fenapestalozzi.org.br. É obrigatório o preenchimento correto da Ficha de Cadastro no momento de aquisição do título. Antes de contratar, consulte previamente as Condições Gerais do Título, cuja versão completa está disponível para consulta no site www.susep.gov.br. Este Título de Capitalização foi aprovado pela Superintendência de Seguros Privados – SUSEP – através do Processo SUSEP nº 15414.651309/2023-72. 1 – SORTEIOS: Ao adquirir o GÊMEOS BRASIL VE.82 o Subscritor irá concorrer aos Sorteios da Modalidade &qhot;Loteria Federal&qhot;. Você concorre em 1 sorteio apurado com base na extração da Loteria Federal do dia 23/03/2024. Para concorrer aos sorteios previstos nesta modalidade o Título contém impresso 1 Número(s) da Sorte, não repetido(s) na mesma série, compreendido(s) no intervalo entre &qhot;000.000&qhot; e &qhot;999.999&qhot;. Para efeito de apuração, ao menos um Número da Sorte impresso no título deverá coincidir, observada a ordem de premiação, as combinações sorteadas serão obtidas da seguinte maneira: com o número formado pela combinação do primeiro prêmio da extração da Loteria Federal, desconsiderando o primeiro algarismo, adicionando-se ao seu final o segundo e o terceiro algarismo do segundo prêmio da Loteria Federal. Regra de Aproximação: Caso a combinação contemplada, apurada na forma, não tenha sido distribuída a um participante será aplicada a seguinte regra de aproximação: será contemplado o participante que possuir o próximo Número da Sorte imediatamente superior ao efetivamente apurado, na forma acima, e assim sucessivamente até que seja identificado um participante contemplado em cada uma das premiações acima. Caso, por qualquer motivo, a Loteria Federal não venha a realizar a extração na data prevista de sorteio, será considerada, para fins do disposto neste Capítulo, a extração seguinte que vier a ser por ela realizada. Caso a Caixa Econômica Federal suspenda definitivamente as extrações da Loteria Federal do Brasil, ou modifique as referidas extrações de forma que não mais coincidam com as regras deste sorteio, ou haja qualquer impedimento à vinculação da Loteria Federal aos sorteios previstos, a VIA Capitalização S.A, num prazo máximo de trinta dias, promoverá o sorteio não realizado com aparelhos próprios e em local de livre acesso ao público, sob fiscalização de auditoria independente e em idênticas condições às previstas originalmente no título, dando prévia e ampla divulgação do fato. Os Títulos sorteados em todas as premiações descritas anteriormente serão resgatados antecipadamente quando da realização do respectivo sorteio e não concorrerão aos próximos sorteios. 2 – SÉRIES E PROBABILIDADES: Os Títulos são ordenados em séries de 1.000.000 unidades e a probabilidade mínima de contemplação, considerando todos os Títulos da série, será igual a uma chance em 1.000.000 para cada um dos sorteios previstos neste Título. O percentual de 44,97448% do valor da contribuição única do Título é destinado à capitalização, que irá gerar um capital mínimo de resgate igual a 45,11851%, ao fim da vigência. O valor de 41,02552% da contribuição única do Título é destinado ao sorteio. Os custos com promoção de distribuição do Título estão abrangidos pela quota de carregamento, que é de 14,00000%, e representam 1% da contribuição única, podendo haver remuneração adicional, de acordo com a performance do produto, conforme previsto em contrato de distribuição. 3 – VIGÊNCIA: A vigência do Título é de 2 meses. 4 – RESGATE: O valor do resgate estará disponível ao Titular do direito de resgate após 2 meses de carência. 5 – DATA, HORA E LOCAL DOS SORTEIOS: Os sorteios serão realizados com base na extração da Loteria Federal do dia 23/03/2024, na hora e local divulgados pela Caixa Econômica Federal. 6 – PRÊMIOS: Para o recebimento do prêmio, quando contemplado, o Subscritor deverá apresentar o Título original contemplado ou o comprovante de aquisição pelo aplicativo/site; RG e CPF válidos; comprovante de residência atualizado e os dados bancários para depósito. O valor dos prêmios descritos é líquido de imposto de renda. A VIACAP pagará a premiação em até 15 (quinze) dias corridos, contados da apresentação da documentação exigida. 7 – DISPOSIÇÕES GERAIS: A aquisição implica automática adesão às Condições Gerais do Título, das quais o Subscritor declara ter tomado ciência previamente a aquisição. Os direitos e obrigações decorrentes deste Título prescrevem no prazo estabelecido na legislação. Na hipótese de extravio do Título, a responsabilidade será exclusivamente do Subscritor. O foro competente para dirimir eventuais questões oriundas do presente Regulamento será o do domicílio do Subscritor. É proibida a venda de título de capitalização a menores de dezesseis anos. A aprovação deste plano pela SUSEP, não implica, por parte da Autarquia, em incentivo ou recomendação à sua aquisição, representando, exclusivamente, sua adequação às normas em vigor. Os dados pessoais acessados em razão da contratação deste título de capitalização serão tradados nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Para mais informações consulte o SAC: 0800 740 7819. OUVIDORIA: 0800 703 1989.
        </section>
      </main>

      <footer className="p-10 bg-footer-background text-[10px] leading-3 text-center flex flex-col items-center justify-center pb-20 mt-20 text-slate-600">
        <div className="flex items-center mb-4">
          <Image width={100} height={50} alt="Logo" src="/via-cap-colorido.png" />
          <Image width={120} height={50} alt="Logo" src="/fenapestalozzi.png" />
        </div>
        <p>Título de Capitalização da Modalidade Filantropia Premiável de Contribuição Única, emitido pela VIACAP Capitalização S/A, CNPJ 88.076.302/0001-94, aprovado pelo Processo SUSEP que consta no Título. SAC 0800 740 7819. OUVIDORIA 0800 703 1989, de segunda a sexta-feira, das 8h às 17h. É proibida a venda de título de capitalização a menores de dezesseis anos. O valor não exigido dentro do prazo prescricional, estabelecido pela legislação em vigor, acarretará a perda desse direito. A aquisição deste título implica a cessão de 100% do direito de resgate à FEDERAÇÃO NACIONAL DAS ASSOCIAÇÕES PESTALOZZI – FENAPESTALOZZI, certificada nos termos da legislação em vigor. Antes de contratar consulte previamente as Condições Gerais. As condições contratuais/regulamento deste produto protocolizadas pela sociedade junto à SUSEP poderão ser consultadas no endereço eletrônico www.susep.gov.br, de acordo com o número de processo constante da proposta. Consulte as informações legais da Resolução CNSP 382/2020 em www.viacapitalizacao.com.br/. Prêmios líquidos de imposto de renda. Confira o resultado dos sorteios e as condições de participação em www.gemeosbrasil.me. Imagens meramente ilustrativas.</p>

        <p className="mt-4">Desenvolvido por <span className="p-1 px-2 bg-blue-600 font-bold rounded-lg text-white">Incrível.Tech</span></p>
      </footer>
    </div>
  );
}
