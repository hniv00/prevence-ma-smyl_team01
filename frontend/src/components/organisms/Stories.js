import React, {Component} from 'react';
import { Card, CardTitle, CardText, Row, Col, CardColumns } from 'reactstrap';
import TextEllipsis from 'react-text-ellipsis';

const data = [{
    id: 1,
    name: 'Petr',
    age: '23',
    description: `Po procházce v lese jsem se pořádně neprohlédl.
    O několik dní později jsem si na těle našel zakouslé klíště, okolo
    místa vkusu zarudlé místo. Ihned jsem jel k lékaři, ale nepomohlo to.
    I tak jsem rád za to, že jsem nelenil a začal problém řešit hned.
    Mohl jsem totiž dopadnout ještě mnohem hůř.`
}, {
    id: 2,
    name: 'Daniela',
    age: '40',
    description: `Kamarádka mě přemluvila, abych s ní šla na Den prevence.
    Jen díky tomu mi tehdy lékaři včas odhalili zhoubný nádor.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}, {
    id: 3,
    name: 'Jiří',
    age: '53',
    description: `Na preventivní prohlídky chodím pravidelně, když mě začaly trápit
    problémy s častým močením, ihned jsem šel za svým urologem.
    Udělal jsem dobře. I když jsem nakonec nebyl nijak vážně nemocný, člověk nikdy neví,
    co se může stát a jaká choroba ho přemůže. Lepší je prevence.`
}, {
    id: 4,
    name: 'Dominika',
    age: '63',
    description: `Nahmatala jsem si bulku v podpaží a ihned jsem šla k lékaři.
    Když doktor určil diagnózu, málem jsem to neustála. Ale věděla jsem, že musím bojovat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}, {
    id: 5,
    name: 'Roman',
    age: '20',
    description: `Po procházce v lese jsem se pořádně neprohlédl.
    O několik dní později jsem si na těle našel zakouslé klíště, okolo
    místa vkusu zarudlé místo. Ihned jsem jel k lékaři, ale nepomohlo to.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}]

const data2 = [{
    id: 1,
    username: 'jeronym220',
    description: `Po procházce v lese jsem se pořádně neprohlédl.
    O několik dní později jsem si na těle našel zakouslé klíště, okolo
    místa vkusu zarudlé místo. Ihned jsem jel k lékaři a to bylo dobře.
    Otestoval mě na boreliózu, která se potvrdila, ale díky včasnému
    zjištění a okamžité léčbě jsem se z toho po 14 dnech dostal.`,
    src: './images/kluk.jpg'
}, {
    id: 2,
    username: 'zofie_kali',
    description: `Moje kamarádka nikdy k doktorům neměla důvěru. Bohužel se jí to vymstilo.
    Přála bych si, aby bývala byla rozumnější a zašla k lékaři hned, jak se jí objevily první
    problémy. Moc mi chybí.`,
    src: './images/holka.jpg'
}, {
    id: 3,
    username: 'honza',
    description: `Na preventivní prohlídky chodím pravidelně, když mě začaly trápit
    problémy s častým močením, ihned jsem šel za svým urologem.
    Udělal jsem dobře. I když jsem nakonec nebyl nijak vážně nemocný, člověk nikdy neví,
    co se může stát a jaká choroba ho přemůže. Lepší je prevence.`,
    src: './images/kluk2.jpg'
}, {
    id: 4,
    username: 'jana.l',
    description: `Díky za tenhle projekt, je to až k nevíře, jak moc lidé nedbají o své tělo a o svoje zdraví.
    Díky tomuhle projektu se vzchopil můj manžel a konečně si došel na kožní se svými znaménky, aby mu je překontrolovali.
    Je v pořádku a já jsem ráda, ale sama jsem ho nedokázala přimět, aby si s tím zašel. #prevenceMaSmysl`,
    src: './images/holka2.jpg'
}, {
    id: 5,
    username: 'katka.noname',
    description: `Holky, prosím, nestyďte se a choďte k lékaři. #prevenceMaSmysl`,
    src: './images/holka3.jpg'
}, {
    id: 6,
    username: 'franta.fanta',
    description: `Tenhle příspěvek za mě píše můj vnuk Jáchym.
    Jáchymovi jsem vděčný za to, že mi řekl o téhle aplikaci a ukázal mi, jak si najít vyšetření.
    Je to moc hodnej kluk, se vším mi pomáhá a ví, že k doktorům nerad chodím. Teď se to snažím změnit
    a víc o sebe dbát. Měli bychom být rádi, že máme v Česku takové lékařství, jaké tu máme. Tak toho
    využijme. `,
    src: './images/pan.jpg'
}, {
    id: 7,
    username: 'luckaa93',
    description: `Kamarádky jsou hrozný frajerky. Myslej si, že se jim nemůže nikdy nic stát.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    src: './images/holka4.png'
}, {
    id: 8,
    username: 'fitness_chef',
    description: `Na preventivní prohlídky chodím pravidelně. A myslím si, že je to dobře. #prevenceMaSmysl je super projekt!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    src: './images/kluk3.jpg'
}, {
    id: 9,
    username: 'petr',
    description: `Na preventivní prohlídky chodím pravidelně. A myslím si, že je to dobře. #prevenceMaSmysl je super projekt!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    src: './images/kluk4.jpg'
}]

export class Stories extends Component {
  render() {

    return (
      <div id="stories">
        <p id="cssContent">Příběhy za 5 minut 12. TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <Row>
          <Col md="6">
            {data.map ( item => (
              <Row>
                <Card id="cssCardStories" body>
                  <CardTitle>{ item.name }, { item.age }</CardTitle>
                  <CardText>
                      <p id="cssStoriesParagraph" style={{textAlign: 'justify'}}>
                          { item.description }
                      </p>
                  </CardText>
                </Card>
              </Row>
            ))}
          </Col>

          <Col md="6">
            <Col id="cssCardColumns">
              {data2.map ( item => (
                <div  class="container"
                      style={{maxWidth: '266px', minWidth: '200px', margin: '10px'}}
                >
                  <img  src={ item.src }
                        style={{maxWidth: '266px', minWidth: '200px', marginTop: '10px'}}></img>
                  <div class="overlay">
                    <div class="text">
                        <p id="cssStoriesParagraph" style={{color: 'black', textAlign: 'justify',
                                                          maxWidth: '266px', minWidth: '200px', margin: '20px'}}>
                        { item.description }
                        </p>
                        <h6>{ item.username }</h6>
                    </div>
                  </div>
                  <h6>{ item.username }</h6>
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
};
