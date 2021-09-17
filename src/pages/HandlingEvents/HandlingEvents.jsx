import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_23 from "../../assets/images/code_23.png";
import code_24 from "../../assets/images/code_24.png";
import code_25 from "../../assets/images/code_25.png";
import code_26 from "../../assets/images/code_26.png";
import code_27 from "../../assets/images/code_27.png";
import code_28 from "../../assets/images/code_28.png";

const HandlingEventsStyled = styled.div`
  .code-screen {
    width: 100%;
    max-width: 900px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;
function HandlingEvents() {
  return (
    <HandlingEventsStyled>
      <Box fontWeight={700} fontSize={60}>
        Իրադարձությունների մշակում
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        Իրադարձությունների մշակումը React-ի էլեմենտներում շատ նման է
        իրադարձությունների մշակմանը DOM էլեմենտներում։ Կան որոշ շարահյուսական
        տարբերություններ։
      </Typography>

      <Typography fontWeight={500}>
        React-ում իրադարձությունների անունները փոքրատառի փոխարեն ուղտաԳիր են։
      </Typography>

      <Typography fontWeight={500}>
        JSX-ում տողային ֆունկցիայի փոխարեն, որպես իրադարձություն մշակող դուք
        փոխանցում եք ֆունկցիա։
      </Typography>

      <Typography>Օրինակ, HTML-ը`</Typography>

      <img src={code_23} alt="code-example" className="code-screen" />

      <Typography>React-ում մի փոքր այլ է`</Typography>

      <img src={code_24} alt="code-example" className="code-screen" />

      <Typography>
        Մեկ այլ տարբերությունն է այն, որ React-ում դուք չեք կարող վերադարձնել
        false, որպեսզի կանխեք լռությամբ սահմանված պահվածքը։ Անհրաժեշտ է բացահայտ
        կանչել preventDefault-ը։ Օրինակ` դիտարկիչում հղումը նոր էջում բացելու
        գործողությունը կանխելու համար, սովորական HTML-ում, դուք կարող եք գրել`
      </Typography>

      <img src={code_25} alt="code-example" className="code-screen" />

      <Typography>React-ում դրա փոխարեն կարող է լինել`</Typography>

      <img src={code_26} alt="code-example" className="code-screen" />

      <Typography>
        Երբ օգտագործում եք React, դուք սովորաբար կարիք չունեք կանչելու
        addEventListener, որպեսզի ավելացնեք listener-ներ DOM էլեմնտներ վրա,
        վերջինիս ստեղծվելուց հետո։
      </Typography>

      <Typography>
        Երբ դուք ստեղծում եք կոմպոնտենտ` օգտագործելով <b>ES6 կլաս</b>, դա
        նշանակում է, որ իրադարձությունների մշակողը պետք է լինի կլասի մեթոդ։
        Օրինակ` այս <b>Toggle</b> կոմպոնտենտը արտապատկերում է մի կոճակ, որը
        օգտվողին թույլ է տալիս կատարել վիճակի փոփոխություն «ՄԻԱՑՆԵԼ»-ի և
        «ԱՆՋԱՏԵԼ»-ի միջև`
      </Typography>

      <img src={code_27} alt="code-example" className="code-screen" />

      <Typography>
        JSX-ի հետկանչում ուշադիր եղեք <b>this</b>-ի նշանակությանը։
        JavaScript-ում կլասի մեթոդները լռությամբ կցված չեն կոնտեքստին։ Եթե դուք
        մոռանաք կցել this.handleClick-ը և փոխանցեք դա onClick-ում, this-ի արժեքը
        կլինի undefined երբ ֆունկցիան կանչվի։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Փոխանցել արգումենտներ իրադարձություն մշակողներին
      </Typography>

      <Typography>
        Ցիկլի ներսում սովորաբար անհրաժեշտ է լինում իրադարձություն մշակողներին
        փոխանցել հավելյալ պարամետրներ։ Օրինակ, եթե id-ն տողի տարբերակիչն է, ապա
        և՛ առաջին տարբերակը կաշխատի, և՛ երկրորդը`
      </Typography>

      <img src={code_28} alt="code-example" className="code-screen" />

      <Typography>
        Վերը նշված երկու տողերի աշխատանքները համարժեք են, դուք կարող եք
        օգտագործել թե սլաք–ֆունկցիա-ները և թե Function.prototype.bind-ը։ <br />
        <br />
        Երկու դեպքում էլ e արգումենտը, որը ներկայացնում է React-ի
        իրադարձությունը, պետք է փոխանցվի որպես երկրորդ արգումենտ` ID-ից հետո։
        Սլաք–ֆունկցիայի դեպքում մենք ստիպված ենք ակնհայտորեն փոխանցել այն, բայց
        bind-ի դեպքում բոլոր հետագա արգումենտները ավտոմատ կերպով կփոխանցվեն։
      </Typography>
    </HandlingEventsStyled>
  );
}

export default HandlingEvents;
