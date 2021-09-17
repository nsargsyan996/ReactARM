import React from "react";
import styled from "styled-components";
import Typography from "../CoreUI/Typography/Typography";
import { Button } from "../CoreUI/Button/Button";
import code_1 from "../../assets/images/code_1.png";
import code_2 from "../../assets/images/code_2.png";
import code_3 from "../../assets/images/code_3.png";
import { useHistory } from "react-router";

const LearnStyled = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 30px 80px;
  background-color: aliceblue;
  overflow: auto;

  .code-screen {
    width: 100%;
    max-width: 1100px;
    margin-top: 10px;
    margin-left: -30px;
  }
`;

export default function Learn() {
  const history = useHistory();

  return (
    <LearnStyled>
      <Typography color="black" fontSize={50} fontWeight={600}>
        Սկսենք
      </Typography>

      <Typography color="black" fontSize={16} fontWeight={400}>
        <strong>React-ը</strong> իսկզբանե նախագծված է եղել այնպես, որ հնարավոր
        լինի աստիճանաբար ինտեգրել, և դուք կարող եք օգտագործել այնքան քիչ կամ
        այնքան շատ <strong>React</strong>, որքան ինքներդ կցանկանաք։ Անկախ այն
        բանից` ցանկանում եք «համտեսել» <strong>React-ը</strong>, ավելացնել մի
        քիչ ինտերակտիվություն հասարակ <strong>HTML</strong> էջում, թե սկսել բարդ{" "}
        <strong>React</strong> հավելված` այս բաժնի հղումները կօգնեն ձեզ անել
        առաջին քայլերը։
      </Typography>

      <Typography
        color="black"
        fontSize={32}
        fontWeight={600}
        bgcolor="rgba(255,229,100,0.3)"
      >
        Ավելացնել React-ը կայքում
      </Typography>

      <Typography color="black" fontSize={16} fontWeight={400}>
        Դուք կարող եք մեկ րոպեում ավելացնել <strong>React-ը HTML</strong> էջում։
        Հաջորդիվ, դուք կարող եք կամ աստիճանաբար ընդլայնել նրա մասնաբաժինը կամ
        պահել այն մի քանի դինամիկ widget-ների համար։
      </Typography>

      <br />

      <Typography color="black" fontSize={18} fontWeight={600}>
        Քայլ 1. Ավելացրեք DOM կոնտեյներ HTML-ում
      </Typography>

      <Typography color="black" fontSize={16} fontWeight={400}>
        Սկզբում բացեք HTML ֆայլը, որը ցանկանում եք խմբագրել(edit)։ Ավելացրեք
        դատարկ <strong>div</strong> թեգ` նշելու համար այն տեղը, որտեղ ցանկանում
        եք ցույց տալ ինչ-որ բան React-ով։ Օրինակ.
      </Typography>

      <img src={code_1} alt="code-example" className="code-screen" />

      <Typography color="black" fontSize={16} fontWeight={400}>
        Մենք այս <strong>div</strong>-ին տվեցինք եզակի <strong>id</strong> HTML
        ատրիբուտ։ Սա մեզ թույլ կտա հետագայում գտնել այն{" "}
        <strong>JavaScript</strong> կոդից և պատկերել <strong>React </strong>
        կոմպոնենտը նրա ներսում:
      </Typography>

      <br />

      <Typography color="black" fontSize={18} fontWeight={600}>
        Քայլ 2. Ավելացնել script թեգեր
      </Typography>

      <Typography>
        Հաջորդիվ, HTML էջում, անմիջապես <strong>body</strong> թեգի փակվելուց
        առաջ, ավելացրեք երեք <strong>script</strong> թեգ.
      </Typography>

      <img src={code_2} alt="code-example" className="code-screen" />

      <Typography>
        Առաջին երկու թեգերը ներբեռնում են <strong>React-ը</strong>։ Երրորդը
        կներբեռնի ձեր կոմպոնենտի կոդը։
      </Typography>

      <br />

      <Typography color="black" fontSize={18} fontWeight={600}>
        Քայլ 3. Ստեղծել React կոմպոնենտ
      </Typography>

      <Typography>
        Ստեղծեք <strong>like_button.js</strong> անունով ֆայլ` ձեր HTML էջի
        հարևանությամբ։
      </Typography>

      <Typography>
        Սկզբնական կոդից հետո ավելացրեք ևս երկու տող{" "}
        <strong>like_button.js</strong>-ի վերջում.
      </Typography>

      <img src={code_3} alt="code-example" className="code-screen" />

      <Typography>
        Այս երկու տող կոդը գտնում է <strong>div</strong>-ը, որն առաջին քայլում
        ավելացրել էինք HTML-ում, և հետո ցույց է տալիս մեր <strong>React</strong>{" "}
        կոմպոնենտը`
        <strong>«Like»</strong> կոճակը դրա ներսում։
      </Typography>

      <Typography color="black" fontSize={18} fontWeight={600}>
        Ահա և վերջ
      </Typography>

      <Typography>
        Անցեք հաջորդ բաժիններին, եթե ցանկանում եք իմանալ ավելին React-ի
        ինտեգրման մասին։
      </Typography>

      <Button
        color="primary"
        size="large"
        onClick={() => history.push("docs/hello-world")}
      >
        գրադարան
      </Button>
    </LearnStyled>
  );
}
