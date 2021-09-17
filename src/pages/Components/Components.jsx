import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_15 from "../../assets/images/code_15.png";
import code_16 from "../../assets/images/code_16.png";
import code_17 from "../../assets/images/code_17.png";

const ComponentsStyled = styled.div`
  .code-screen {
    width: 100%;
    max-width: 900px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

function Components() {
  return (
    <ComponentsStyled>
      <Box fontWeight={700} fontSize={60}>
        Կոմպոնենտներ
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        Կոմպոնենտները թույլ են տալիս մասնատել UI-ը միմյանցից անկախ, բազմակի
        օգտագործման ենթակա կտորների և մտածել ամեն կտորի մասին առանձին։ Այս էջը
        Ձեզ կծանոթացնի կոմպոնենտների գաղափարի հետ{" "}
      </Typography>

      <Typography>
        Գաղափարապես, կոմպոնենտները նման են JavaScript ֆունկցիաներին։ Դրանք
        ընդունում են կամայական մուտքային արժեքներ (որոնք կոչվում են{" "}
        <b>«props»</b>) և վերադարձնում են React էլեմենտներ, որոնք նկարագրում են
        այն, թե ինչ է հայտնվելու էկրանին։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Ֆունկցիա և կլաս կոմպոնենտեր
      </Typography>

      <Typography>
        Կոմպոնենտ հայտարարելու պարզագույն եղանակը JavaScript ֆունկցիա գրելն է.
      </Typography>

      <img src={code_15} alt="code-example" className="code-screen" />

      <Typography>
        Այս ֆունկցիան վավեր React կոմպոնենտ է, որովհետև այն ընդունում է
        տվյալները օբյեկտով, որպես մեկ արգումենտ(«props»), և վերադարձնում է React
        էլեմենտ։ Այսպիսի կոմպոնենտները մենք անվանում ենք «ֆունկցիա-կոմպոնենտ»,
        որովհետև նրանք ըստ էության JavaScript ֆունկցիաներ են։
      </Typography>

      <Typography>
        Կոմպոնենտ հայտարարելու համար դուք կարող եք նաև օգտագործել{" "}
        <b>ES6 կլաս</b>
      </Typography>

      <img src={code_16} alt="code-example" className="code-screen" />

      <Typography>
        Վերը նշված երկու կոմպոնենտները React-ի տեսանկյունից համարժեք են։
        <br />
        <br />
        Կլասներն ունեն մի քանի լրացուցիչ հնարավորություններ, որոնց մասին մենք
        կխոսենք հաջորդ բաժնում։ Մինչ այդ, մենք կօգտագործենք
        ֆունկցիա-կոմպոնենտներ նրանց հակիրճության համար։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Կոմպոնենտի արտապատկերում
      </Typography>

      <Typography>
        Նախկինում, մենք միայն հանդիպել ենք այնպիսի React էլեմենտների, որոնք
        իրենցից ներկայացնում էին DOM թեգեր. Ինչևէ, էլեմենտները կարող են իրենցից
        ներկայացնել օգտագործողի կողմից հայտարարված կոմպոնենտներ.
      </Typography>

      <Typography>
        Երբ React-ը տեսնում է էլեմենտ, որն իրենից ներկայացնում է օգտագործողի
        կողմից հայտարարված կոմպոնենտ, ապա փոխանցում է JSX ատրիբուտներ այդ
        կոմպոնենտին որպես մեկ օբյեկտ։ Մենք անվանում ենք այդ օբյեկտը «props»։
        <br />
        <br />
        Օրինակ, այս կոդը կարտապատկերի «Ողջույն, Անահիտ».
      </Typography>

      <img src={code_17} alt="code-example" className="code-screen" />

      <Typography>
        Եկեք իմի բերենք այն ինչ տեղի է ունենում այս օրինակում. <br />
        <br />
        1. Մենք կանչում ենք ReactDOM.render()-ը <b>
          Welcome name="Անահիտ"
        </b>{" "}
        էլեմենտով։
        <br />
        <br />
        2. React-ը կանչում է Welcome կոմպոնենտը <b>name: 'Անահիտ'</b> օբյեկտով,
        որպես props։
        <br />
        <br />
        3. Մեր Welcome կոմպոնենտը, որպես արդյունք, վերադարձնում է{" "}
        <b>h1 Ողջույն, Անահիտ h1</b> էլեմենտը։ <br />
        <br />
        4. React DOM-ը արդյունավետորեն թարմացնում է DOM-ը, որպեսզի ստանա{" "}
        <b>h1 Ողջույն, Անահիտ h1</b>։
      </Typography>
    </ComponentsStyled>
  );
}

export default Components;
