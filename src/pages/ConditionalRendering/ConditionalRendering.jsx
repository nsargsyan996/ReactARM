import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_29 from "../../assets/images/code_29.png";
import code_30 from "../../assets/images/code_30.png";
import code_31 from "../../assets/images/code_31.png";
import code_32 from "../../assets/images/code_32.png";
import code_33 from "../../assets/images/code_33.png";

const ConditionalRenderingStyled = styled.div`
  .code-screen {
    width: 100%;
    max-width: 900px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

function ConditionalRendering() {
  return (
    <ConditionalRenderingStyled>
      <Box fontWeight={700} fontSize={60}>
        Պայմանական արտապատկերում
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        React-ում դուք կարող եք ստեղծել միմյանցից զատ կոմպոնենտներ որոնք
        կինկապսուլացնեն ձեզ համար անհրաժեշտ պահվածքը, որից հետո կարող եք
        արտապատկերել նրանցից ոմանց` ելենելով հավելվածի վիճակից։
      </Typography>

      <Typography>
        React-ում պայմանական արտապատկերումը աշխատում է այնպես, ինչպես պայմանները
        JavaScript-ում։ Օգտագործեք JavaScript-ի օպերատորներից if-ը կամ
        պայմանական օպերատորը, որպեսզի ստեղծեք էլեմենտներ, որոնք կներկայացնեն
        ընթացիկ վիճակը և թույլ կտան React-ին թարմացնել UI-ը համապատասխանեցնելով
        իրենց։
      </Typography>

      <Typography>
        Մենք կստեղծենք <b>Greeting</b> կոմպոնենտը, որը ցույց կտա այս
        կոմպոնենտներից միայն մեկը` կախված օգտագործողը մուտք է գործել համակարգ թե
        ոչ.
      </Typography>

      <img src={code_29} alt="code-example" className="code-screen" />

      <Typography>
        Այս օրինակը արտապատկերում է տարբեր <b>Greeting</b> կոմպոնենտներ ելնելով`
        <b> isLoggedIn</b> հատկության արժեքից։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Տրամաբանական && օպերատօրը if-ի փոխարեն
      </Typography>

      <Typography>
        Դուք կարող եք ներդնել ցանկացած JSX արտահայտություն ձևավոր փակագծերի մեջ։
        Այն ներառում է JavaScript-ի տրամաբանական && օպերատորը։ Այն կարող է լինել
        հարմար էլեմենտը պայմանկանորեն ավելացնելու համար։
      </Typography>

      <img src={code_30} alt="code-example" className="code-screen" />

      <Typography>
        Այն աշխատում է որովհետև JavaScript-ում, <b>true &&</b> արտահայտություն-ը
        միշտ արժեքավորվում է որպես արտահայտություն, և <b>false &&</b>{" "}
        արտահայտություն-ը միշտ արժեքավորվում է որպես <b>false</b>.
        <br />
        <br />
        Հետևաբար, եթե արտահայտությունը true է, նշանակում էլեմենտը &&-ից
        անմիջապես հետո պետք է արտապատկերվի ելքային արժեքում։ Եթե այն false է`
        React-ը կանտեսի և բաց կթողնի այն։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Պայմանական օպերատորը if-else-ի փոխարեն
      </Typography>

      <Typography>
        Մեկ այլ միջոց, որը թույլ է տալիս պայմանականորեն արտապատկերել էլեմենտը,
        դա JavaScript-ի <b>պայման ? true : false</b> օպերատորի օգտագործումն է։
        Ստորև բերված օրինակում մենք օգտագործում ենք պայմանական օպերատորը փոքր
        տեքստային բլոկ արտապատկերելու համար.
      </Typography>

      <img src={code_31} alt="code-example" className="code-screen" />

      <Typography>
        Այն կարող է օգտագործվել նաև մեծ արտահայտությունների դեպքում չնայած նրան
        որ այդքան էլ ակնհայտ չէ թե ինչ է կատարվում.
      </Typography>

      <img src={code_32} alt="code-example" className="code-screen" />

      <Typography>
        Ինչպես JavaScript-ում, դուք եք ընտրում համապատասխան գրելաոճը, հիմնվելով
        նրան, թե որն եք դուք և ձեր թիմը համարում ավելի ընթերնելի։ ԵՎ հիշեք որ
        եթե պայմանները ավելի են բարդանում, ապա դա շատ լավ ժամանակ է կոմպոնենտը
        բաժանել մասերի։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Կոմպոնենտի արտապատկերման կանխում
      </Typography>

      <Typography>
        Միգուցե, հազվադեպ դեպքերում ցանկանաք, որ կոմպոնենտը թաքցնի ինքն իրեն,
        անգամ եթե այն արտապատկերվել է մեկ այլ կոմպոնենտի կողմից։ Այդ անելու
        համար ուղղակի վերադարձրեք <b>null</b> որպես ելքային արժեք։
        <br />
        <br />
        Ստորև բերված օրինակում <b>WarningBanner</b>-ը արտապատկերվում է կախված{" "}
        <b>warn</b> հատկության արժեքից։ Եթե նրա արժեքը <b>false</b> է, ապա
        կոմպոնենտը չի արտապատկերվի։
      </Typography>

      <img src={code_33} alt="code-example" className="code-screen" />

      <Typography>
        Կոմպոնենտի <b>render</b> մեթոդից <b>null</b> վերադարձնելու դեպքում
        կոմպոնենտի կյանքի ցիկլի մեթոդները չեն կանչվելու։ Սակայն{" "}
        <b>componentDidUpdate</b>-ը կշարունակի կանչվել։
      </Typography>
    </ConditionalRenderingStyled>
  );
}

export default ConditionalRendering;
