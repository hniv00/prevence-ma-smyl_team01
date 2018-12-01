import React, {Component} from 'react';
import { Card, CardTitle, CardText, Row, Col, CardColumns } from 'reactstrap';

const data = [{
    id: 1,
    name: 'Petr',
    age: '23',
    description: `Po procházce v lese jsem se pořádně neprohlédl.
    O několik dní později jsem si na těle našel zakouslé klíště, okolo
    místa vkusu zarudlé místo. Ihned jsem jel k lékaři, ale nepomohlo to.`
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
    name: 'Jeroným',
    age: '30',
    description: `Po procházce v lese jsem se pořádně neprohlédl.
    O několik dní později jsem si na těle našel zakouslé klíště, okolo
    místa vkusu zarudlé místo. Ihned jsem jel k lékaři a to bylo dobře.
    Otestoval mě na boreliózu, která se potvrdila, ale díky včasnému
    zjištění a okamžité léčbě jsem se z toho po 14 dnech dostal.`
}, {
    id: 2,
    name: 'Žofie',
    age: '25',
    description: `Moje kamarádka nikdy k doktorům neměla důvěru. Bohužel se jí to vymstilo.
    Přála bych si, aby bývala byla rozumnější a zašla k lékaři hned, jak se jí objevily první
    problémy. Moc mi chybí.`
}, {
    id: 3,
    name: 'Honza',
    age: '50',
    description: `Na preventivní prohlídky chodím pravidelně, když mě začaly trápit
    problémy s častým močením, ihned jsem šel za svým urologem.
    Udělal jsem dobře. I když jsem nakonec nebyl nijak vážně nemocný, člověk nikdy neví,
    co se může stát a jaká choroba ho přemůže. Lepší je prevence.`
}, {
    id: 4,
    name: 'Jana',
    age: '40',
    description: `Díky za tenhle projekt, je to až k nevíře, jak moc lidé nedbají o své tělo a o svoje zdraví.
    Díky tomuhle projektu se vzchopil můj manžel a konečně si došel na kožní se svými znaménky, aby mu je překontrolovali.
    Je v pořádku a já jsem ráda, ale sama jsem ho nedokázala přimět, aby si s tím zašel. #prevenceMaSmysl`
}, {
    id: 5,
    name: 'Katka',
    age: '20',
    description: `Holky, prosím, nestyďte se a choďte k lékaři. #prevenceMaSmysl`
}, {
    id: 3,
    name: 'Franta',
    age: '70',
    description: `Tenhle příspěvek za mě píše můj vnuk Jáchym.
    Jáchymovi jsem vděčný za to, že mi řekl o téhle aplikaci a ukázal mi, jak si najít vyšetření.
    Je to moc hodnej kluk, se vším mi pomáhá a ví, že k doktorům nerad chodím. Teď se to snažím změnit
    a víc o sebe dbát. Měli bychom být rádi, že máme v Česku takové lékařství, jaké tu máme. Tak toho
    využijme. `
}, {
    id: 2,
    name: 'Lucie',
    age: '15',
    description: `Kamarádky jsou hrozný frajerky. Myslej si, že se jim nemůže nikdy nic stát.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}, {
    id: 3,
    name: 'Petr',
    age: '17',
    description: `Na preventivní prohlídky chodím pravidelně. A myslím si, že je to dobře. #prevenceMaSmysl je super projekt!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}]

export class Stories extends Component {
  render() {

    return (
      <div id="stories">
        <p id="cssContent">Příběhy za 5 minut 12. TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <Row>
          <Col md="6">
            {data.map ( item => (
              <Row>
                <Card id="cssCardStories" body>
                  <CardTitle>{ item.name }, { item.age }</CardTitle>
                  <CardText>
                      <p id="cssStoriesParagraph">
                          { item.description }
                      </p>
                  </CardText>
                </Card>
              </Row>
            ))}
          </Col>

          <Col md="6">
            <CardColumns id="cssCardColumns">
              {data2.map ( item => (
                    <Card id="cssCardStories" body>
                      <CardTitle>{ item.name }, { item.age }</CardTitle>
                      <CardText>
                          <p id="cssStoriesParagraph">
                              { item.description }
                          </p>
                      </CardText>
                    </Card>
              ))}
            </CardColumns>
          </Col>
        </Row>
      </div>
    );
  }
};
