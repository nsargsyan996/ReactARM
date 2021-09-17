import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_5 from "../../assets/images/code_5.png";
import code_6 from "../../assets/images/code_6.png";
import code_7 from "../../assets/images/code_7.png";
import code_8 from "../../assets/images/code_8.png";
import code_9 from "../../assets/images/code_9.png";
import code_10 from "../../assets/images/code_10.png";
import code_11 from "../../assets/images/code_11.png";

const IntroducingJsxStyled = styled.div`
  .code-screen {
    width: 100%;
    max-width: 900px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

function IntroducingJsx() {
  return (
    <IntroducingJsxStyled>
      <Box fontWeight={700} fontSize={60}>
        Ծանոթացում JSX-ի հետ
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        Դիտարկենք այս փոփոխականի հայտարարումը.
      </Typography>

      <img src={code_5} alt="code-example" className="code-screen" />

      <Typography>
        Այս հետաքրքիր շարահյուսությունը ոչ տող է ոչ <b>HTML</b>։
        <br />
        <br />
        <br /> Այն կոչվում է <b>JSX</b> և հանդիսանում է <b>JavaScript</b>-ի
        շարահյուսական ընդլայնում։ Մենք խորհուրդ ենք տալիս օգտագործել այն React-ի
        հետ` սահմանելու համար, թե ինչ տեսք պետք է ունենա UI-ը։ <b>JSX</b>-ը
        կարող է ձեզ հիշեցնել ձևանմուշային լեզու, բայց այն ներառում է
        JavaScript-ի ամբողջ հզորությունը։ <br />
        <br />
        <b>JSX</b>-ը «արտադրում» է React էլեմենտներ։ Այն, թե ինչպես են նրանք
        արտապատկերվում <b>DOM</b>-ում, մենք կբացահայտենք հաջորդ գլխում։ Ստորև
        դուք կարող եք գտնել <b>JSX</b>-ի հետ աշխատել սկսելու համար անհրաժեշտ
        հիմքային գաղափարները։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        ինչու՞ JSX?
      </Typography>

      <Typography>
        React-ն ընդունում է այն գաղափարը, որ արտապատկերման տրամաբանությունը, ըստ
        էության, կապված է <b>UI</b> տրամաբանության հետ. այն, թե ինչպես են
        իրադարձությունները մշակվում, թե ինչպես է <b>state</b>-ը փոփոխվում
        ժամանակի ընթացքում, և, թե ինչպես են տվյալները պատրաստվում պատկերվելու
        համար։
      </Typography>

      <Typography>
        Փոխանակ նշարկումն(markup) ու տրամաբանությունն(logic) առանձին ֆայլերում
        դնելով տեխնոլոգիաները արհեստականորեն բաժանելու` React-ը կիրառում է
        պատասխանատվության բաժանում` <b>«կոմպոնենտներ»</b> կոչվող, միմյանց հետ
        թույլ կապված բլոկների հետ, որոնք երկուսն էլ պարունակում են։ Մենք դեռ
        կանդրադառնանք կոմպոնենտներին հաջորդ գլխում։
      </Typography>

      <Typography>
        React-ը չի պահանջում JSX-ի օգտագործումը, բայց շատ մարդիկ, որպես
        տեսողական օգնություն, համարում են դա օգտակար, երբ JavaScript կոդում
        աշխատում են UI-ի հետ։ Դա նաև թույլ է տալիս React-ին ցույց տալ ավելի
        օգտակար ծանուցումներ սխալների և զգուշացումների մասին։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Ներդրված արտահայտություններ JSX-ում
      </Typography>

      <Typography>
        Ստորև ներկայացված օրինակում մենք հայտարարում ենք <b>name</b> անունով
        փոփոխական և օգտագործում այն JSX-ի ներսում` փաթաթելով այն ձևավոր
        փակագծերով.
      </Typography>

      <img src={code_6} alt="code-example" className="code-screen" />

      <Typography>
        <b>JSX</b>-ում` ձևավոր փակագծերի ներսում, դուք կարող եք տեղադրել
        ցանկացած վավեր <b>JavaScript</b> արտահայտություն։ Օրինակ. 2 + 2,
        user.firstName, կամ formatName(user). սրանք բոլորը վավեր JavaScript
        արտահայտություններ են։ Իսկ այս մի օրինակում, մենք ներդնում ենք
        JavaScript ֆունկցիայի կանչի արդյունքը` formatName(user), <b>h1</b>{" "}
        էլեմենտի մեջ։
      </Typography>

      <img src={code_7} alt="code-example" className="code-screen" />

      <Typography>
        Մենք բաժանում ենք <b>JSX</b>-ը բազմաթիվ տողերի ընթեռնելիության համար։
        Այդպիսի դեպքերում, չնայած դա պարտադիր չէ, մենք նաև խորհուրդ ենք տալիս
        դնել դրանց փակագծերի մեջ` կետ-ստորակետների ավտոմատ տեղադրման ժամանակ
        անկանխատեսելի խնդիրներից խուսափելու համար։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        JSX-ը նույնպես արտահայտություն է
      </Typography>

      <Typography>
        Կոմպիլյացիայից հետո <b>JSX</b> արտահայտությունները վերածվում են
        սովորական JavaScript ֆունկցիայի կանչերի և հաշվարկվում որպես JavaScript
        օբյեկտներ։ <br /> <br />
        Սա նշանակում է, որ դուք կարող եք օգտագործել <b>JSX</b>-ը <b>if</b>{" "}
        պայմանի կամ <b>for</b> ցիկլի ներսում, վերագրել այն փոփոխականների,
        ընդունել այն որպես արգումենտ և վերադարձնել այն ֆունկցիաներից.
      </Typography>

      <img src={code_8} alt="code-example" className="code-screen" />

      <Typography fontSize={26} fontWeight={700}>
        Ատրիբուտների սահմանում JSX-ում JSX-ն իրենից ներկայացնում է օբյեկտներ
      </Typography>

      <Typography>
        Դուք կարող եք օգտագործել ապաթարցեր` հայտարարելու համար տողային
        լիտերալներ որպես ատրիբուտներ.
      </Typography>

      <img src={code_9} alt="code-example" className="code-screen" />

      <Typography>
        Դուք նաև կարող եք օգտագործել ձևավոր փակագծեր` ներդնելու համար JavaScript
        արտահայտություններ ատրիբուտում.
      </Typography>

      <img src={code_10} alt="code-example" className="code-screen" />

      <Typography>
        Մի դրեք ապաթարցեր ձևավոր փակագծերի շուրջ, երբ ներդնում եք JavaScript
        արտահայտություն ատրիբուտում։ Դուք պետք է կա՛մ օգտագործեք ապատարցեր
        (տողային արժեքների համար), կա՛մ ձևավոր փակագծեր (արտահայտությունների
        համար), բայց ոչ երկուսը միասին նույն ատրիբուտում։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        JSX-ն իրենից ներկայացնում է օբյեկտներ
      </Typography>

      <Typography>
        Babel-ը կոմպիլացնում է JSX-ը <b>React.createElement()</b> կանչերի։{" "}
        <br />
        <br />
        <b>React.createElement()</b>-ը կատարում է մի քանի ստուգում` օգնելու
        համար ձեզ գրել սխալներից ազատ կոդ, բայց, ըստ էության, այն ստեղծում է
        այսպիսի օբյեկտ
      </Typography>

      <img src={code_11} alt="code-example" className="code-screen" />

      <Typography>
        Այս օբյեկտները կոչվում են «React էլեմենտներ»։ Դուք կարող եք դրանք
        համարել այն բաների նկարագրություն, որոնք ցանկանում եք տեսնել էկրանին։
        React-ը կարդում է այդ օբյեկտները և օգտագործում է նրանց DOM-ը կառուցելու
        և այն թարմ պահելու համար։
      </Typography>
    </IntroducingJsxStyled>
  );
}

export default IntroducingJsx;
