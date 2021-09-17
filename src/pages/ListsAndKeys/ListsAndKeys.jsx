import React from "react";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_34 from "../../assets/images/code_34.png";
import code_35 from "../../assets/images/code_35.png";
import code_36 from "../../assets/images/code_36.png";
import code_37 from "../../assets/images/code_37.png";
import code_38 from "../../assets/images/code_38.png";
import code_39 from "../../assets/images/code_39.png";
import code_40 from "../../assets/images/code_40.png";
import code_41 from "../../assets/images/code_41.png";

function ListsAndKeys() {
  return (
    <Box>
      <Box fontWeight={700} fontSize={60}>
        Ցուցակներ և բանալիներ
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        Նախ վերհիշենք, թե ինչպես ենք աշխատում ցուցակների հետ JavaScript-ում։
      </Typography>

      <Typography>
        Ստորև բերված կոդում, թվեր-ի զանգված վերցնելու և նրանց արժեքները
        կրկնապատկելու համար, մենք օգտագործում ենք map() ֆունկցիան։ Այնուհետև,
        doubled փոփոխականին վերագրում ենք այն, ինչ վերադարձվել է map()
        ֆունկցիայի կողմից և տպում ենք այն։
      </Typography>

      <img src={code_34} alt="code-example" className="code-screen" />

      <Typography>
        Այս կոդը կոնսոլում տպում է [2, 4, 6, 8, 10]։ <br />
        <br />
        React-ում զանգվածների փոխակերպումը էլեմենտների ցուցակների կատարվում է
        նման եղանակով։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Մի քանի կոմպոնենտների արտապաատկերում
      </Typography>

      <Typography>
        Դուք կարող եք ստեղծել էլեմենտների հավաքածուներ և օգտագործելով ձևավոր
        փակագծերը {}` ներդնել դրանք JSX-ի մեջ։ <br />
        <br />
        Ստորև, մենք, օգտագործելով JavaScript-ի map() ֆունկցիան, անցնում ենք
        թվերի զանգվածի վրայով և զանգվածի յուրաքանչյուր էլեմենտի համար
        վերադարձնում ենք <b>li</b> էլեմենտ։ Եվ, ի վերջո, ստացված էլեմենտների
        զանգվածը վերագրում ենք listItems-ին։
      </Typography>

      <img src={code_35} alt="code-example" className="code-screen" />

      <Typography>
        Մենք ողջ <b>listItems</b> զանգվածը ներդնում ենք <b>ul</b> էլեմենտի մեջ և
        արտապատկերում այն <b>DOM</b>-ում։
      </Typography>

      <img src={code_36} alt="code-example" className="code-screen" />

      <Typography>Այս կոդը ցույց է տալիս 1-ից 5-ը թվերի ցուցակ։</Typography>

      <Typography fontSize={26} fontWeight={700}>
        Հասարակ ցուցակ-կոմպոնենտ
      </Typography>

      <Typography>
        Սովորաբար դուք արտապատկերելու եք ցուցակները ինչ-որ կոմպոնենտի մեջ։{" "}
        <br />
        <br />
        Մենք կարող ենք վերամշակել նախորդ օրինակը և ստանալ կոմպոնենտ, որը
        ընդունում է թվերի զանգված և որպես ելքային արժեք վերադարձնում է
        էլեմենտների ցուցակ։
      </Typography>

      <img src={code_37} alt="code-example" className="code-screen" />

      <Typography>
        Երբ այս կոդը աշխատեցնեք, դուք կստանաք զգուշացում այն մասին, որ ցուցակի
        էլեմենտները պետք է ունենան բանալիներ։ <b>«Բանալին»</b> դա հատուկ տողային
        ատրիբուտ է, որը պետք է նշեք էլեմենտների ցուցակ ստեղծելիս։ Թե ինչի համար
        է դա կարևոր, կքննարկենք հաջորդ բաժնում։
      </Typography>

      <Typography>
        Եկեք <b>numbers.map()</b>-ի մեջ մեր զանգվածի էլեմենտներին փոխանցենք{" "}
        <b>key</b> և ուղղենք բաց թողնված բանալու խնդիրը։
      </Typography>

      <img src={code_38} alt="code-example" className="code-screen" />

      <Typography fontSize={26} fontWeight={700}>
        Բանալիներ (key)
      </Typography>

      <Typography>
        Բանալիները React-ին օգնում են տարբերել փոփոխված, ավելացված կամ հեռացված
        էլեմենտները։ Բանալիները պետք է փոխանցել էլեմենտներին ՝ նրանց կայուն
        տարբերակիչ տալու համար։
      </Typography>

      <img src={code_39} alt="code-example" className="code-screen" />

      <Typography>
        Բանալի ընտրելու լավագույն տարբերակը դա այնպիսի տողային փոփոխականի
        օգտագործումն է, որը միարժեք կտարբերակի ցուցակի տարրին նրա հարևաններից։
        Շատ հաճախ դուք կօգտագործեք ձեր տվյալների <b>ID</b>-ները, որպես բանալի։
        <br />
        <br />
        Եթե դուք չունեք հաստատուն <b>ID</b>-ներ էլեմենտների արտապատկերման համար,
        ապա որպես վերջին միջոց կարող եք օգտագործել էլեմենտի ինդեքսը։
      </Typography>

      <img src={code_40} alt="code-example" className="code-screen" />

      <Typography>
        Խորհուրդ չենք տալիս օգտագործել ինդեքսները որպես բանալիներ այն դեպքում
        երբ էլեմենտների դասավորությունը կարող է փոխվել։ Դա կարող է բացասաբար
        ազդել արտադրողականության վրա և կոմպոնենտի վիճակի հետ կապված խնդիրներ
        հարուցել։ Կարդացեք <b>Ռոբին Պոկորնեի</b> հոդվածը`{" "}
        <b>ինդեքսները, որպես բանալի օգտագործելու</b> բացասական ազդեցության խորը
        բացատրության մասին։ Եթե դուք որոշեք ցուցակի էլեմենտներին բացահայտորեն
        բանալի չփոխանցել, ապա React-ը որպես բանալի լռելյայն կօգտագործի
        ինդեքսները։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Ներդրված map() JSX-ում
      </Typography>

      <Typography>
        Մինչ այս օրինակներում մենք հայտարարում էինք առանձին <b>listItems</b>{" "}
        փոփոխական և տեղադրում այն JSX-ում: <br />
        <br />
        JSX-ը թույլ է տալիս ձևավոր փակագծերի մեջ ներդնել ցանկացած
        արտահայտություն, այսպիսով մենք կարող ենք տեղադրել <b>map()</b>-ից ստացած
        արդյունքը`
      </Typography>

      <img src={code_41} alt="code-example" className="code-screen" />

      <Typography>
        Երբեմն սա բերում է ավելի մաքուր կոդի, սակայն այս ոճը նույնպես կարող է
        չարաշահվել։ Ինչպես JavaScript-ում, այստեղ նույնպես ձեր հայեցողության տակ
        է որոշելը` տարանջատել փոփոխականը ավելի ընթեռնելի դարձնելու համար, թե`
        ոչ։ Մտապահեք, որ եթե <b>map()</b>-ի մարմինը չափազանց ներդրված է, ապա
        գուցե կարիք կա կոմպոնենտը տարանջատելու։
      </Typography>
    </Box>
  );
}

export default ListsAndKeys;
