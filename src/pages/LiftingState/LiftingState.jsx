import React from "react";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_46 from "../../assets/images/code_46.png";
import code_47 from "../../assets/images/code_47.png";
import code_48 from "../../assets/images/code_48.png";
import code_49 from "../../assets/images/code_49.png";
import code_50 from "../../assets/images/code_50.png";

function LiftingState() {
  return (
    <Box>
      <Box fontWeight={700} fontSize={60}>
        Վիճակի բարձրացում
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        Հաճախ, մի քանի կոմպոնենտներ պետք է անդրադարձնեն նույն փոփոխվող
        տվյալները։ Մենք խորհուրդ ենք տալիս բարձրացնել ընդհանուր վիճակը դեպի
        նրանց մոտակա ընդհանուր ծնող։ Եկեք տեսնենք, թե ինչպես է դա աշխատում.
      </Typography>

      <Typography>
        Այս բաժնում մենք կստեղծենք ջերմաստիճանի հաշվիչ, որը հաշվում է, թե տրված
        ջերմաստիճանում արդյոք կեռա ջուրը։ <br />
        <br /> Մենք կսկսենք կոմպոնենտից, որը կոչվում է <b>BoilingVerdict</b>։
        Այն ընդունում է <b>celsius</b> prop որպես ջերմաստիճան և տպում է, թե
        արդյոք դա բավարար է ջրի եռման համար.
      </Typography>

      <img src={code_46} alt="code-example" className="code-screen" />

      <Typography>
        Հաջորդիվ մենք կստեղծենք կոմպոնենտ, որը կոչվում է <b>Calculator</b>։ Այն
        արտապատկերում է <b>input</b>, որը թույլ է տալիս ձեզ մուտքագրել
        ջերմաստիճանը և պահում է նրա արժեքը <b>this.state.temperature</b>-ում։
        <br />
        <br />
        Բացի այդ, այն արտապատկերում է <b>BoilingVerdict</b>-ը ընթացիկ
        մուտքագրված արժեքի համար։
      </Typography>

      <img src={code_47} alt="code-example" className="code-screen" />

      <Typography fontSize={26} fontWeight={700}>
        Վիճակի բարձրացում
      </Typography>

      <Typography>
        Այս պահին երկու <b>TemperatureInput</b> կոմպոնենտներն էլ անկախ պահում են
        իրենց արժեքները <b>լոկալ state</b>-ում.
      </Typography>

      <img src={code_48} alt="code-example" className="code-screen" />

      <Typography>
        Ինչևէ, մենք ցանկանում ենք, որ այս երկու input-ները լինեն միմյանց հետ
        համաձայնեցված։ Երբ մենք թարմացնենք Ցելսիուս input-ը, Ֆարենհայթի input-ը
        պետք է արտացոլի փոխակերպված ջերմաստիճանը, և հակառակը։ <br />
        <br />
        React-ում, վիճակով կիսվելը իրականացվում է նրա տեղափոխումով դեպի դրա
        կարիքը ունեցող կոմպոնենտների մոտակա ընդհանուր ծնող։ Սա անվանվում է
        «վիճակի բարձրացում»։ Մենք կջնջենք լոկալ state-ը <b>TemperatureInput</b>
        -ից և կտեղափոխենք այն <b>Calculator</b>։
        <br />
        <br />
        Եթե ընդհանուր վիճակը լինի <b>Calculator</b>-ում, ապա այն կդառնա
        «ճշմարտության աղբյուր» ընթացիկ ջերմաստիճանի համար երկու input-ներում։
        Այն կարող է տրամադրել նրանց միմյանց չհակասող արժեքներ։ Քանի որ երկու{" "}
        <b>TemperatureInput</b> կոմպոնենտների prop-երը գալիս են նույն ծնող{" "}
        <b>Calculator </b>
        կոմպոնենտից, ապա երկու input-ները կլինեն համաձայնեցված։
        <br />
        <br />
        Եկեք տեսնենք, թե ինչպես է սա աշխատում քայլ-առ-քայլ։
        <br />
        <br />
        Նախ, մենք կփոխարինենք <b>this.state.temperature</b>-ը{" "}
        <b>this.props.temperature</b>-ով <b>TemperatureInput</b> կոմպոնենտում։
        Եկեք այժմ ենթադրենք, որ <b>this.props.temperature</b> արդեն գոյություն
        ունի, չնայած ապագայում մենք պետք է փոխանցենք այն <b>Calculator</b>-ից։
      </Typography>

      <img src={code_49} alt="code-example" className="code-screen" />

      <Typography>
        Մենք գիտենք, որ prop-երը միայն կարդալու համար են։ Երբ temperature-ը
        լոկալ state-ում էր, TemperatureInput-ը կարող էր ընդամենը կանչել
        this.setState()` այն թարմացնելու համար։ Ինչևէ, հիմա, երբ temperature-ը
        գալիս է ծնողից որպես prop, TemperatureInput-ը չունի վերահսկողություն դրա
        վրա։
        <br />
        <br />
        React-ում սա սովորաբար լուծվում է` դարձնելով կոմպոնենտը «կառավարվող»։
        Ինչպես DOM input-ն է ընդունում և՛ value և՛ onChange prop, այդպես էլ
        օգտագործողի TemperatureInput-ը կարող է ընդունել և՛ temperature և՛
        onTemperatureChange prop իր ծնողից։
        <br />
        <br />
        Հիմա, երբ <b>TemperatureInput</b>-ը ցանկանում է թարմացնել իր
        ջերմաստիճանը, այն կանչում է <b>this.props.onTemperatureChange</b>.
      </Typography>

      <img src={code_50} alt="code-example" className="code-screen" />

      <Typography>
        <b>onTemperatureChange</b> prop-ը կտրամադրվի <b>temperature</b> prop-ի
        հետ միասին <b>Calculator</b> ծնող կոմպոնենտից։ Վերջինս կմշակի
        փոփոխությունները` փոխելով իր սեփական լոկալ <b>state</b>-ը. այսպիսով
        վերա-արտապատկերելով երկու <b>input</b>-ները նոր արժեքներով։ Մենք
        կտեսնենք <b>Calculator</b>-ի նոր իրականացումը շուտով։
      </Typography>
    </Box>
  );
}

export default LiftingState;
