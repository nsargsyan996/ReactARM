import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Typography from "../../components/CoreUI/Typography/Typography";
import code_18 from "../../assets/images/code_18.png";
import code_19 from "../../assets/images/code_19.png";
import code_20 from "../../assets/images/code_20.png";
import code_21 from "../../assets/images/code_21.png";
import code_22 from "../../assets/images/code_22.png";

const StateLifecycleStyled = styled.div`
  .code-screen {
    width: 100%;
    max-width: 900px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

function StateLifecycle() {
  return (
    <StateLifecycleStyled>
      <Box fontWeight={700} fontSize={60}>
        Վիճակ և կյանքի ցիկլ
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        Այս էջը ներկայացնում է վիճակի(state) և կյանքի ցիկլի(lifecycle) գաղափարը
        React կոմպոնենտում։
      </Typography>

      <Typography>
        Դիտարկենք «ժամացույցի» աշխատանքի օրինակը` նկարագրված վերջին գլուխներից
        մեկում։ Էլեմենտների արտապատկերում գլխում մենք UI-ը թարմացնելու միայն մեկ
        եղանակ ենք սովորել։ Մենք կանչում ենք ReactDOM.render()-ը` փոփոխելու
        արտապատկերված ելքային արժեքը.
      </Typography>

      <img src={code_18} alt="code-example" className="code-screen" />

      <Typography>
        Այս գլխում մենք կսովորենք, թե ինչպես դարձնել <b>Clock</b> կոմպոնենտը
        իսկապես բազմակի օգտագործման ենթակա և ինկապսուլացված։ Այն կտեղադրի իր
        սեփական Ժամաչափը(timer) և կթարմացնի ինքն իրեն ամեն վայրկյան։
        <br />
        <br />
        Սկզբում առանձնացնենք ժամանակը ցույց տվող կոմպոնենտը.{" "}
      </Typography>

      <img src={code_19} alt="code-example" className="code-screen" />

      <Typography>
        Այնուամենայնիվ, բաց է թողնված առանցքային պահանջ. այն փաստը, որ{" "}
        <b>Clock</b>-ը տեղադրում է ժամաչափ և թարմացնում է UI-ը ամեն վայրկյան,
        պետք է լինի
        <b> Clock</b>-ի իրականացման տարր։
        <br />
        <br />
        Լավագույն դեպքում մենք ցանկանում ենք գրել սա մեկ անգամ և ունենալ
        ինքնաթարմացվող <b>Clock</b>.
      </Typography>

      <img src={code_20} alt="code-example" className="code-screen" />

      <Typography>
        Սա իրականացնելու համար մենք կարիք ունենք ավելացնելու <b>state Clock </b>
        կոմպոնենտին։
        <br />
        <br />
        <b>State</b>-ը նման է props-ին, բայց այն անձնական է և ամբողջությամբ
        կառավարվում է կոմպոնենտի կողմից։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Ավելացնել լոկալ state կլասին
      </Typography>

      <Typography>
        Մենք կտեղափոխենք <b>date</b>-ը props-ից state երեք քայլով։
      </Typography>

      <Box component={Typography} fontWeight={600} pl={5} mt={2}>
        1. Փոխարինել this.props.date-ը this.state.date-ով render() մեթոդում:
      </Box>
      <Box component={Typography} fontWeight={600} pl={5}>
        2. Ավելացնել կլասի կոնստրուկտորeng, որը կվերագրի նախնական this.state-ը։
      </Box>
      <Box component={Typography} fontWeight={600} pl={5}>
        3. Ջնջել date prop-ը Clock էլեմենտից.
      </Box>

      <img src={code_21} alt="code-example" className="code-screen" />

      <Typography>
        Հաջորդիվ, <b>Clock</b>-ում մենք կտեղադրենք իր սեփական ժամաչափը, որը
        կթարմացնի ինքն իրեն ամեն վայրկյան։
      </Typography>

      <Typography fontSize={26} fontWeight={700}>
        Կյանքի ցիկլի մեթոդների ավելացում կլասում
      </Typography>

      <Typography>
        Շատ կոմպոնենտներ ունեցող հավելվածներում, կոմպոնենտների ոչնչացվելուց
        հետո, շատ կարևոր է նրանց կողմից վերցված ռեսուրսների ազատումը։
        <br />
        <br />
        Մենք ցանկանում ենք տեղադրել ժամաչափ, երբ Clock-ը արտապատկերվել է DOM-ում
        առաջին անգամ։ Սա React-ում կոչվում է <b>«mounting»</b>։
        <br />
        <br />
        Մենք նաև ցանկանում ենք ջնջել ժամաչափը հենց որ Clock-ի կողմից ստեղծված
        DOM հանգույցը ջնջվի։ Սա React-ում կոչվում է <b>«unmounting»</b>։
        <br />
        <br />
        Մենք կարող ենք հայտարարել հատուկ մեթոդներ կլաս-կոմպոնենտում, որպեսզի
        աշխատեցնենք կոդ կոմպոնենտի «mount»-ի և «unmount»-ի ժամանակ. Այս
        մեթոդները կոչվում են «կյանքի ցիկլի մեթոդներ»։
      </Typography>

      <Typography>
        <b>componentDidMount()</b> մեթոդը կանչվում է կոմպոնենտի ելքային արժեքի`
        DOM-ում արտապատկերվելուց հետո։ Սա հարմար տեղ է ժամաչափ տեղադրելու համար.
      </Typography>

      <Typography>
        Մենք կջնջենք ժամաչափը <b>componentWillUnmount()</b> կյանքի ցիկլի
        մեթոդում.
        <br />
        <br />
        Վերջապես, մենք կիրականացնենք <b>tick()</b> անունով մեթոդ, որին Clock
        կոմպոնենտը կաշխատեցնի ամեն վայրկյան։
        <br />
        <br />
        Այն կօգտագործի <b>this.setState()</b>-ը` պլանավորելու կոմպոնենտի{" "}
        <b>լոկալ state</b>-ի թարմացումները.
      </Typography>

      <img src={code_22} alt="code-example" className="code-screen" />

      <Typography>
        Այժմ ժամացույցը թարմանում է ամեն վայրկյան։
        <br />
        <br />
        Եկեք արագ իմի բերենք այն, թե ինչ է տեղի ունենում և ինչ հերթականությամբ
        են կանչվում մեթոդները.
      </Typography>

      <Box px={4}>
        <Typography fontWeight={500}>
          1. Երբ Clock-ը փոխանցվում է ReactDOM.render()-ին, React-ը կանչում է
          Clock կոմպոնենտի կոնստրուկտորը։ Քանի որ Clock-ը կարիք ունի պատկերելու
          ընթացիկ ժամը, այն սկզբնարժեքավորում է this.state-ը օբյեկտով, որը
          պարունակում է ընթացիկ ժամը։ Ավելի ուշ մենք կթարմացնենք այս state-ը։
        </Typography>
        <Typography fontWeight={500}>
          2. Հետո React-ը կանչում է Clock կոմպոնենտի render() մեթոդը։ Ահա թե
          ինչպես է React-ն իմանում, թե ինչ պիտի պատկերի էկրանին։ Այնուհետև
          React-ը թարմացնում է DOM-ը , որպեսզի ստանա Clock-ի render-ի ելքային
          արժեքը։
        </Typography>
        <Typography fontWeight={500}>
          3. Երբ Clock-ի ելքային արժեքը ավելացված է DOM-ում, React-ը կանչում է
          componentDidMount() կյանքի ցիկլի մեթոդը։ Դրա ներսում Clock կոմպոնենտը
          հարցնում է զննարկչին ժամաչափ տեղադրելու համար, որպեսզի կանչի
          կամպոնենտի tick() մեթոդը վայրկյանը մեկ։
        </Typography>
        <Typography fontWeight={500}>
          Վայրկյանը մեկ զննարկիչը կանչում է tick() մեթոդը։ Դրա ներսում, Clock
          կոմպոնենտը պլանավորում է UI-ի թարմացումը` կանչելով setState() ընթացիկ
          ժամը պարունակող օբյեկտով։ setState()-ի կանչի շնորհիվ React-ը գիտի, որ
          state-ը փոխվել է և կանչում է render() մեթոդը կրկին` իմանալու համար, թե
          ինչը պետք է լինի էկրանին։ Այս անգամ, render()-ում this.state.date-ը
          կլինի ուրիշ, և այսպիսով, render-ի ելքային արժեքը կներառի թարմացված
          ժամանակը։ React-ը կթարմացնի DOM-ը համապատասխանաբար։
        </Typography>
        <Typography fontWeight={500}>
          Եթե Clock կոմպոնենտը երբևիցե ջնջվի DOM-ից, React-ը կկանչի
          componentWillUnmount() կյանքի ցիկլի մեթոդը, որի հետևանքով ժամաչափը
          կկանգնի։
        </Typography>
      </Box>

      <Typography fontSize={26} fontWeight={700}>
        State-ի ճիշտ օգտագործում
      </Typography>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        Կա երեք բան <b>setState()</b>-ի մասին, որ պետք է իմանալ։
      </Typography>

      <Typography fontSize={22} fontWeight={600}>
        Մի փոփոխեք state-ը անմիջականորեն
      </Typography>

      <Typography>Օրինակ, սա չի վերա-արտապատկերի կոմպոնենտը.</Typography>
      <Box pl={2} fontWeight={600}>
        this.state.comment = 'Ողջույն';
      </Box>
      <Typography>Փոխարենը` օգտագործեք setState().</Typography>
      <Box pl={2} fontWeight={600}>
        {`this.setState({comment: 'Ողջույն'});`}
      </Box>
      <Typography>
        <b>this.state</b>-ին վերագրում կարող եք կատարել միայն կոնստրուկտորում։
      </Typography>

      <Typography fontSize={22} fontWeight={600}>
        State-ը կարող է թարմանալ ասինխրոն
      </Typography>

      <Typography>
        React-ը կարող է խմբավորել մի քանի <b>setState()</b> կանչեր մեկ թարմացման
        մեջ արտադրողականության համար։
        <br />
        <br />
        Քանի որ <b>this.props</b>-ը և <b>this.state</b>-ը կարող են թարմացված
        լինել ասինխրոն, դուք չպետք է հիմնվեք նրանց արժեքների վրա` հաջորդ{" "}
        <b>state</b>-ը հաշվելու համար։
      </Typography>

      <Typography fontSize={22} fontWeight={600}>
        State-ի թարմացումները միավորվում են
      </Typography>

      <Typography>
        Երբ դուք կանչում եք <b>setState()</b>, React-ը միավորում է ձեր տրամադրած
        օբյեկտը ընթացիկ state-ի հետ։
      </Typography>
    </StateLifecycleStyled>
  );
}

export default StateLifecycle;
