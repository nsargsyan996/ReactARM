import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_12 from "../../assets/images/code_12.png";
import code_13 from "../../assets/images/code_13.png";
import code_14 from "../../assets/images/code_14.png";

const RenderingElementsStyled = styled.div`
  .code-screen {
    width: 100%;
    max-width: 900px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

function RenderingElements() {
  return (
    <RenderingElementsStyled>
      <Box fontWeight={700} fontSize={60}>
        Էլեմենտների արտապատկերումը
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        Էլեմենտները React հավելվածի փոքրագույն կառուցողական բլոկերն են։
      </Typography>

      <Typography>
        Էլեմենտը նկարագրում է այն` ինչ ցանկանում եք տեսնել էկրանին։
      </Typography>
      <Typography>
        Ի տարբերություն բրաուզերի <b>DOM</b> էլեմենտների` React էլեմենտները
        իրենցից ներկայացնում են հասարակ օբյեկտներ և ռեսուրսատար չեն ստեղծման
        համար։
        <b>React DOM</b>-ը համեմատելով էլեմենտները հոգ կտանի <b>DOM</b>-ը
        թարմացնելու համար։
      </Typography>

      <Typography>
        Ենթադրենք <b>HTML</b> ֆայլում որևէ տեղ ունենք հետևյալ <b>div</b>{" "}
        էլեմենտը։
      </Typography>

      <img src={code_12} alt="code-example" className="code-screen" />

      <Typography>
        Մենք այն անվանում ենք <b>«root» DOM</b> հանգույց, որովհետև ամեն ինչը նրա
        ներսում ղեկավարվելու է <b>React DOM</b>-ի կողմից. <br />
        <br />
        Սովորաբար React-ով ստեղծված հավելվածները ունեն մեկ արմատ (root) DOM
        հանգույց։ եթե դուք ինտեգրում եք React-ը արդեն գույություն ունեցող
        հավելվածին, ապա կարող եք ունենալ այնքան «root» DOM հանգույցներ որքան որ
        կցանկանաք։ <br />
        <br />
        React էլեմենտը արմատ DOM հանգույցում նկարելու համար, պետք է երկուսն էլ
        փոխանցել <b>ReactDOM.render()</b>-ին։
      </Typography>

      <img src={code_13} alt="code-example" className="code-screen" />

      <Typography>Այն էջում ցույց կտա «Ողջույն, աշխարհ»</Typography>

      <Typography fontSize={26} fontWeight={700}>
        Թարմացնում ենք նկարված էլեմենտը
      </Typography>

      <Typography>
        React էլեմենտները անփոփոխ են։ Էլեմենտի ստեղծման պահից հետո դուք չեք
        կարող փոխել նրա ատրիբուտները կամ զավակներին։ Էլելեմենտը նման է ֆիլմի մեկ
        կադրին` այն ներկայացնում է UI-ը ժամանակի որոշակի պահին։
      </Typography>

      <Typography>
        Այս պահի մեր գիտելիքներով UI-ը թարմացնելու միակ ձևը նոր էլեմենտ ստեղծելն
        ու փոխանցելն է <b>ReactDOM.render()</b>-ին։
        <br />
        <br />
        Դիտարկեք այս ժամացույցի օրինակը.
      </Typography>

      <img src={code_14} alt="code-example" className="code-screen" />

      <Typography>
        Այն կանչում է <b>ReactDOM.render()</b>-ը <b>setInterval()</b>-ի հետկանչ
        ֆունկցիայից` յուրաքանչյուր վարկյանը մեկ։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        React-ը թարմացնում է միայն այն ինչը անհրաժեշտ է
      </Typography>

      <Typography>
        <b>React DOM</b>-ը համեմատում է էլեմենտը և նրա զավակներին նախորդների
        հետ, և կիրառում է DOM-ի թարմացում միայն անհրաժեշտության դեպքում` DOM-ը
        ցանկալի վիճակին հասցնելու համար։-ը համեմատում է էլեմենտը և նրա
        զավակներին նախորդների հետ, և կիրառում է DOM-ի թարմացում միայն
        անհրաժեշտության դեպքում` DOM-ը ցանկալի վիճակին հասցնելու համար։
      </Typography>

      <Box
        component="img"
        src="https://hy.reactjs.org/granular-dom-updates-cb6a3833b8173c2c2c6444cd256e1399.gif"
        alt="timer"
        border={1}
        borderRadius={10}
        my={3}
      />

      <Typography>
        Չնայած նրան որ մեր ստեղծած էլեմենտը նկարագրում է ողջ <b>UI ծառը </b>
        յուրաքանչյուր <b>tick</b>-ի ժամանակ, <b>React DOM</b>-ը թարմացնում է
        միայն այն տեքստային հանգույցը, որի կոնտենտը ենթարկվել է փոփոխության։
      </Typography>
    </RenderingElementsStyled>
  );
}

export default RenderingElements;
