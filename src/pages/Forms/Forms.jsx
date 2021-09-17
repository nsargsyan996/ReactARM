import React from "react";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_42 from "../../assets/images/code_42.png";
import code_43 from "../../assets/images/code_43.png";
import code_44 from "../../assets/images/code_44.png";
import code_45 from "../../assets/images/code_45.png";

function Forms() {
  return (
    <Box>
      <Box fontWeight={700} fontSize={60}>
        Ձևաթուղթ
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        HTML form էլեմենտները React-ում ուրիշ DOM էլեմենտների հետ համեմատած մի
        փոքր այլ կերպ են աշխատում, որովհետև form էլեմենտներն իրականում պահում են
        որոշ ներքին վիճակ։ Դիտարկենք form-ի հետևյալ օրինակը.{" "}
      </Typography>

      <img src={code_42} alt="code-example" className="code-screen" />

      <Typography>
        Այս form-ը լռությամբ ունի HTML form-ի պահվածք, այն է` հաստատման(submit)
        ժամանակ գնալ նոր էջ։ Եթե ցանկանաք նման պահվածք React-ում, վերը նշված
        օրինակն ուղղակի կաշխատի։ Բայց հիմնականում, հարմար է ունենալ JavaScript
        ֆունկցիա, որը կմշակի <b>form</b>-ի հաստատումը և կունենա հասանելիություն
        օգտագործողի կողմից մուտքագրված տվյալներին։ Սրան հասնելու ստանդարտ միջոցը{" "}
        <b>«կառավարվող կոմպոնենտներ»(controlled components)</b> գործելակերպի
        օգտագործումն է։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Կառավարվող կոմպոնենտներ
      </Typography>

      <Typography>
        HTML-ում, form էլեմենտները, ինչպիսիք են <b>input</b>-ը, <b>textarea</b>
        -ն կամ <b>select</b>-ը սովորաբար ղեկավարում են իրենց սեփական վիճակը և
        թարմացնում այն` հիմնվելով օգտագործողի մուտքագրումների վրա։ React-ում
        փոփոխված վիճակը պահվում է կոմպոնենտի state հատկությունում և թարմացվում
        միայն <b>setState()</b>-ով։
        <br />
        <br />
        Մենք կարող ենք համատեղել երկու մոտեցումները` դարձնելով React-ի state-ը
        «ճշմարտության միակ աղբյուր»(single source of truth)։ Այդպիսով, React
        կոմպոնենտը, որն արտապատկերում է form-ը, նաև կկառավարի այդ form-ի
        պահվածքն ու վիճակը օգտագործողի հաջորդական մուտքագրումների ժամանակ։
        Մուտքագրվող <b>form</b> էլեմենտը, որի արժեքը կառավարվում է React-ի
        կողմից այս կերպ, կոչվում է <b>«կառավարվող կոմպոնենտ»</b>։
        <br />
        <br />
        Օրինակ. եթե մենք ցանկանում եք, որ նախորդ օրինակը հաստատման ժամանակ նաև
        տպի օգտագործողի անունը, մենք կարող ենք գրել form-ը որպես կառավարվող
        կոմպոնենտ.
      </Typography>

      <img src={code_43} alt="code-example" className="code-screen" />

      <Typography>
        Քանի որ value ատրիբուտը տեղադրված է մեր form էլեմենտի վրա, պատկերվող
        արժեքը միշտ կլինի <b>this.state.value</b>-ն` դարձնելով React-ի վիճակը
        ճշմարտության աղբյուր։ Ու քանի որ օգտագործողի ամեն կոճակ սեղմելիս
        աշխատում է <b>handleChange</b>-ը, որը թարմացնում է React-ի <b>state</b>
        -ը, ապա պատկերվող արժեքը կթարմացվի հենց որ օգտագործողը սեղմի կոճակը։
        <br />
        <br /> Կառավարվող կոմպոնենտներում վիճակի ցանկացած փոփոխության կապված է
        մշակող ֆունկցիա։ Դա կհեշտացնի օգտագործողի մուտքագրած արժեքի փոփոխումը
        կամ վավերացումը։ Օրինակ. եթե ցանկանում ենք, որ օգտագործողի կողմից գրված
        անունները ամբողջությամբ լինեն մեծատառ, մենք կարող ենք գրել
        <b>handleChange</b>-ն այսպես.
      </Typography>

      <img src={code_44} alt="code-example" className="code-screen" />

      <Typography fontSize={26} fontWeight={700}>
        Կառավարվող Input-ի null արժեք
      </Typography>

      <Typography>
        Սահմանելով <b>value prop</b>-ը կառավարվող կոմպոնենտի վրա` կանխվում են
        օգտագործողի փոփոխությունները <b>input</b>-ում, քանի դեռ դուք չեք
        ցանկացել հակառակը։ Եթե դուք սահմանել եք <b>value</b>-ն, բայց{" "}
        <b>input</b>-ը մնացել է խմբագրելի(editable), ապա միգուցե value-ին
        պատահմամբ փոխանցել եք <b>undefined կամ null</b>։
        <br />
        <br />
        Հետևյալ կոդը ցուցադրում է վերը նշվածը։ (Այս <b>input</b>-ը սկզբում
        «կողպված» է, բայց փոքր-ինչ հետո այն կդառնա խմբագրելի։)
      </Typography>

      <img src={code_45} alt="code-example" className="code-screen" />
    </Box>
  );
}

export default Forms;
