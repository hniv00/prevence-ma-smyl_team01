import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, CardTitle, CardText, Row, Col, CardColumns } from 'reactstrap';
import TextEllipsis from 'react-text-ellipsis';
import {getStories} from '../../services/Stories/reducer';
import {startFetchStories} from '../../services/Stories/actions'
import { getTwitterFeed } from '../../services/Stories/reducer';
import {startFetchTwitterFeed} from '../../services/Stories/actions';

/* This data2 should be replaced with Twitter or Instagram feed */
// const data2 = [{
//     id: 1,
//     username: 'jeronym220',
//     description: `Po procházce v lese jsem se pořádně neprohlédl.
//     O několik dní později jsem si na těle našel zakouslé klíště, okolo
//     místa vkusu zarudlé místo. Ihned jsem jel k lékaři a to bylo dobře.
//     Otestoval mě na boreliózu, která se potvrdila, ale díky včasnému
//     zjištění a okamžité léčbě jsem se z toho po 14 dnech dostal.`,
//     src: './images/kluk.jpg'
// }, {
//     id: 2,
//     username: 'zofie_kali',
//     description: `Moje kamarádka nikdy k doktorům neměla důvěru. Bohužel se jí to vymstilo.
//     Přála bych si, aby bývala byla rozumnější a zašla k lékaři hned, jak se jí objevily první
//     problémy. Moc mi chybí.`,
//     src: './images/holka.jpg'
// }, {
//     id: 3,
//     username: 'honza',
//     description: `Na preventivní prohlídky chodím pravidelně, když mě začaly trápit
//     problémy s častým močením, ihned jsem šel za svým urologem.
//     Udělal jsem dobře. I když jsem nakonec nebyl nijak vážně nemocný, člověk nikdy neví,
//     co se může stát a jaká choroba ho přemůže. Lepší je prevence.`,
//     src: './images/kluk2.jpg'
// }, {
//     id: 4,
//     username: 'jana.l',
//     description: `Díky za tenhle projekt, je to až k nevíře, jak moc lidé nedbají o své tělo a o svoje zdraví.
//     Díky tomuhle projektu se vzchopil můj manžel a konečně si došel na kožní se svými znaménky, aby mu je překontrolovali.
//     Je v pořádku a já jsem ráda, ale sama jsem ho nedokázala přimět, aby si s tím zašel. #prevenceMaSmysl`,
//     src: './images/holka2.jpg'
// }, {
//     id: 5,
//     username: 'katka.noname',
//     description: `Holky, prosím, nestyďte se a choďte k lékaři. #prevenceMaSmysl`,
//     src: './images/holka3.jpg'
// }, {
//     id: 6,
//     username: 'franta.fanta',
//     description: `Tenhle příspěvek za mě píše můj vnuk Jáchym.
//     Jáchymovi jsem vděčný za to, že mi řekl o téhle aplikaci a ukázal mi, jak si najít vyšetření.
//     Je to moc hodnej kluk, se vším mi pomáhá a ví, že k doktorům nerad chodím. Teď se to snažím změnit
//     a víc o sebe dbát. Měli bychom být rádi, že máme v Česku takové lékařství, jaké tu máme. Tak toho
//     využijme. `,
//     src: './images/pan.jpg'
// }, {
//     id: 7,
//     username: 'luckaa93',
//     description: `Kamarádky jsou hrozný frajerky. Myslej si, že se jim nemůže nikdy nic stát.
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     src: './images/holka4.png'
// }, {
//     id: 8,
//     username: 'fitness_chef',
//     description: `Na preventivní prohlídky chodím pravidelně. A myslím si, že je to dobře. #prevenceMaSmysl je super projekt!
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     src: './images/kluk3.jpg'
// }, {
//     id: 9,
//     username: 'petr',
//     description: `Na preventivní prohlídky chodím pravidelně. A myslím si, že je to dobře. #prevenceMaSmysl je super projekt!
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     src: './images/kluk4.jpg'
// }]

export class StoriesRaw extends Component {

  componentDidMount(){
    this.props.startFetchStories();
    this.props.startFetchTwitterFeed();
  }

  render() {
    const { stories } = this.props;
    console.log(this.props.twitterFeed);
    console.log(this.props);

    return (
      <div id="stories">
        <p id="cssContent">Příběhy za 5 minut 12.
        Ne každý má v životě štěstí. Někteří si ale díky včasné prevenci dokázali
        zachránit život. Ne vždy se to ale podaří. Prevence je důležitá a své o tom vědí
        právě lidé, kteří se nebojí svěřit se se svým příběhem. Máš i ty svůj osobní příběh,
        kdy jsi díky prevenci předešel zbytečným komplikacím, anebo víš naopak o někom, komu
        se nečinnost a nezájem o vlastní tělo vymstily? Sdílej svůj příběh s hashtagem #prevenceMaSmysl
        na Twitteru nebo Instagramu a inspiruj tak ostatní k tomu, aby se zajímali o své zdraví.</p>
        <Row>
          <Col md="6">
            {stories.map ( item => (
              <Row>
                <Card id="cssCardStories" body>
                  <CardTitle>{ item.Name }, { item.Age }</CardTitle>
                  <CardText>
                      <p id="cssStoriesParagraph" style={{textAlign: 'justify'}}>
                          { item.Description }
                      </p>
                  </CardText>
                </Card>
              </Row>
            ))}
          </Col>

          <Col md="6">
            <Col id="cssCardColumns">
              {this.props.twitterFeed.map ( item => (
                <div  class="container"
                      style={{maxWidth: '266px', minWidth: '240px', margin: '10px'}}
                >
                  <img  src={ item.src }
                        style={{maxWidth: '266px', minWidth: '240px', marginTop: '10px'}}></img>
                  <div class="overlay">
                    <div class="text">
                        <p id="cssStoriesParagraph" style={{color: 'black', textAlign: 'justify', width: 'auto',
                                                          maxWidth: '266px', minWidth: '200px', margin: '30px'}}>
                          <TextEllipsis
                            lines={10}
                            tag={'p'}
                            ellipsisChars={'...'}
                            tagClass={'className'}
                            debounceTimeoutOnResize={200}
                            useJsOnly={true}>
                            { item.text }
                          </TextEllipsis>
                        </p>
                    </div>
                  </div>
                  <h6>{ item.user }</h6>
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const stories = getStories(state.showStories);
  const twitterFeed = getTwitterFeed(state.showStories);
  return {
    stories,
    twitterFeed
  };
};

const mapDispatchToProps = {
  startFetchStories,
  startFetchTwitterFeed
}

export const Stories = connect(mapStateToProps, mapDispatchToProps)(StoriesRaw);
