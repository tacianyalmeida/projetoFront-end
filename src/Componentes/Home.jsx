import ImgColaboradores from '../../Image/colaboradores.png'
import ImgControle from '../../Image/controle-de-limpeza.png'
import ImgPlanilha from '../../Image/planilha.png'
import ImgCadastro from '../../Image/cadastro.png'
import { Div, DivQuadradoBranco, H1, H1DivQuadrado, H2, ImgCard, ImgPrincipal, P, Section, SectionCard } from "../Style/Home";


const Home = () => {
    return(
        <>
        <Section>
            <ImgPrincipal src={ImgColaboradores}/>
        </Section>
        <Div>
            <H1>Control-Clean</H1>
            <H2>SEJA BEM-VINDO COLABORADOR</H2>
        </Div>
        <DivQuadradoBranco>
            <H1DivQuadrado>A Importância da Limpeza Na Escola</H1DivQuadrado>
            <P>A higiene e limpeza na escola são aspectos
                    essenciais para criar um ambiente seguro e saudável para os estudantes.
                    A prevenção de doenças, o bem-estar dos alunos e o aprendizado eficiente
                    são beneficiados quando a comunidade escolar se envolve e trabalha em conjunto
                    para manter a higiene e a limpeza em dia. A conscientização sobre a importância
                    desses aspectos desde cedo é fundamental para formar alunos responsáveis e conscientes,
                    que carregarão esses valores para a vida adulta.</P>
        </DivQuadradoBranco>
        <SectionCard>
            <ImgCard src={ImgControle}/>
            <ImgCard src={ImgPlanilha}/>
            <ImgCard src={ImgCadastro}/>
        </SectionCard>
        </>
    )
}

export default Home;