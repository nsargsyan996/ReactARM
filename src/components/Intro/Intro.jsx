import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "../CoreUI/Button/Button";
import styled from "styled-components";
import IntroCard from "./IntroCard.jsx";
import { useHistory } from "react-router";

const H1Styled = styled.h1`
  font-weight: bold;
  color: rgb(97, 218, 251);
  text-align: center;
  font-size: 54px;
  margin-top: 0;
  padding: 80px 0;
`;

const H3Styled = styled.h3`
  font-weight: normal;
  color: white;
  text-align: center;
  font-size: 32px;
`;

const ContentStyled = styled.h3`
  background: white;
  margin-top: 70px;
  padding: 40px;
`;

const TextStyled = styled.span`
  background-color: rgba(255, 229, 100, 0.2);
  font-weight: 600;
`;

const Text = styled.p`
  font-weight: 400;
  color: black;
`;

function Intro() {
  const history = useHistory();

  return (
    <Box height={200}>
      <H1Styled>React JS</H1Styled>
      <H3Styled>
        JavaScript գրադարան` օգտագործողի ինտերֆեյսներ կառուցելու համար
      </H3Styled>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button
          color="secondary"
          size="large"
          onClick={() => history.push("/learn")}
        >
          Սկսենք
        </Button>

        <Button
          color="primary"
          size="large"
          onClick={() => history.push("docs/hello-world")}
        >
          գրադարան
        </Button>
      </Box>

      <ContentStyled>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          flexWrap="wrap"
          className="intro-flex"
        >
          <IntroCard
            title="Դեկլարատիվ"
            content={
              <span>
                React-ը թույլ է տալիս հեշտորեն ստեղծել ինտերակտիվ UI-ներ։
                Նախագծեք ներկայացումներ(views) ձեր ծրագրի ցանկացած վիճակի(state)
                համար, և React-ը արդյունավետորեն կթարմացնի և կարտապատկերի միայն
                այն կոմպոնենտները, որոնցում ձեր տվյալները ենթարկվել են
                փոփոխության։ <br />
                <br />
                Դեկլարատիվ ներկայացումները դարձնում են ձեր կոդը ավելի
                կանխատեսելի և հեշտ` debug-ի համար։
              </span>
            }
          />
          <IntroCard
            title="Հիմնված կոմպոնենտների վրա"
            content={
              <span>
                Կառուցեք ինկապսուլացված կոմպոնենտներ, որոնք կկառավարեն իրենց
                սեփական վիճակը, այնուհետև համախմբեք նրանց` ստեղծելով բարդ
                UI-ներ։ <br />
                <br />
                Քանի որ կոմպոնենտի տրամաբանությունը գրված է JavaScript-ով, այլ
                ոչ թե ձևանմուշներով, դուք կարող եք հեշտությամբ փոխանցել մեծ
                տվյալներ ձեր հավելվածի միջով և պահել հավելվածի վիճակը DOM-ից
                դուրս։
              </span>
            }
          />
          <IntroCard
            title="Սովորիր մեկ անգամ, կիրառիր ամենուր"
            content={
              <span>
                Մենք ենթադրություններ չենք անում ձեր մնացած տեխնոլոգիաների ստեկի
                վերաբերյալ. այսպիսով, դուք կարող եք ստեղծել նոր հատկություններ
                React-ով առանց փոփոխելու գոյություն ունեցող կոդը։ <br />
                <br />
                React-ը նաև կարող է արտապատկերվել սերվերում` օգտագործելով Node և
                հնարավորություն է տալիս ստեղծել բջջային հավելվածներ`
                օգտագործելով React Native։
              </span>
            }
          />
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box maxWidth="50%" mr={8}>
            <Box component="p">
              <bold>Պարզ կոմպոնենտ</bold>
            </Box>
            <Box component={Text}>
              React-ի կոմպոնենտները իրականացնում են
              <TextStyled> render()</TextStyled> մեթոդը, որը ստանում է մուտքային
              տվյալներ և վերադարձնում է այն, ինչ պետք է պատկերել։ Այս օրինակում
              օգտագործվում է XML-անման շարահյուսություն, որը կոչվում է
              <TextStyled> JSX</TextStyled>։ Մուտքային տվյալները, որոնք
              փոխանցվել են կոմպոնենտին, կարող են լինել հասանելի
              <TextStyled> render()</TextStyled>-ում
              <TextStyled> this.props</TextStyled>-ով։
            </Box>
            <Box component={Text}>
              <strong>
                JSX-ը պարտադիր չէ, և կարող է չօգտագործվել React-ում։{" "}
              </strong>
              Փորձիր <TextStyled> Babel REPL</TextStyled>` JSX-ի կոմպիլյացիայի
              փուլում մշակված JavaScript կոդը տեսնելու համար։
            </Box>
          </Box>

          <Box maxWidth="50%">
            <Box component="p">
              <bold>Վիճակով կոմպոնենտ</bold>
            </Box>
            <Box component={Text}>
              Բացի մուտքային տվյալները վերցնելուց (որոնք հասանելի են
              <TextStyled> this.props</TextStyled>-ով), կոմպոնենտը կարող է պահել
              ներքին վիճակի տվյալներ (որոնք հասանելի են{" "}
              <TextStyled>this.state</TextStyled>-ով)։ Երբ կոմպոնենտում վիճակի
              տվյալները փոխվեն, արտապատկերված նշարկումը կթարմանա{" "}
              <TextStyled>render()</TextStyled>-ի կանչով։
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          mb={4}
        >
          <Box maxWidth="50%" mr={8}>
            <Box component="p">
              <bold>Հավելված</bold>
            </Box>
            <Box component={Text}>
              Օգտագործելով <TextStyled>props</TextStyled>-ը և{" "}
              <TextStyled>state</TextStyled>-ը` մենք կարող ենք ստեղծել փոքր Todo
              հավելված։ Այս օրինակում օգտագործվում է
              <TextStyled>state</TextStyled>` հետևելու համար էլեմենտների ընթացիկ
              ցուցակին, ինչպես նաև օգտագործողի կողմից մուտքագրված տեքստին։ Թեպետ
              թվում է, թե իրադարձություն մշակողները միջտողային(inline) են կցված,
              սակայն իրականում նրանք հավաքվում և իրականացվում են` օգտագործելով
              իրադարձությունների պատվիրակում(event delegation)։
            </Box>
          </Box>

          <Box maxWidth="50%">
            <Box component="p">
              <bold>Կոմպոնենտ, որն օգտագործում է արտաքին plugin-ներ</bold>
            </Box>
            <Box component={Text}>
              React-ը թույլ է տալիս համագործակցել այլ գրադարանների և
              framework-ների հետ։ Այս օրինակում օգտագործվում է{" "}
              <strong>remarkable</strong> արտաքին Markdown գրադարանը,{" "}
              <TextStyled>textarea</TextStyled>-ի արժեքը իրական ժամանակում
              փոխարկելու համար։
            </Box>
          </Box>
        </Box>

        <Box
          mb={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => history.push("/learn")}
        >
          <Button color="primary" size="extra">
            Սկսենք
          </Button>
        </Box>
      </ContentStyled>
    </Box>
  );
}

export default Intro;
