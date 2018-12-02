import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'reactstrap';

export class PartnersRaw extends Component {
  data;
  constructor(props){
    super(props);
  }

  render() {
    this.data = this.props.partners;
    console.log(this.props.partners);

    return (
    <div>
          {this.data.map((item, i) => (
                <div id={item.DivID}>
                    <Row>

                        {i%2 === 1 &&
                        <Col xs="12" sm="4">
                            <img src={item.Src} className="imgRound" alt={item.SrcAlt} />
                        </Col>}

                        <Col xs="12" sm="8">
                            <h5 style={{ textTransform: 'uppercase' }}>{item.Name}</h5>
                            <p id="cssContent">{item.Description}</p>
                        </Col>

                        {i%2 != 1 &&
                        <Col xs="12" sm="4">
                            <img src={item.Logo} className="imgRound" alt={item.LogoAlt} />
                        </Col>}

                    </Row>
                    <hr />
                </div>
            ))}
    </div>
  );
}
};


const mapStateToProps = (state) => ({
  partners: state.filterPartner.partners
});

export const Partners = connect(mapStateToProps)(PartnersRaw);

/*
const data = [
  { name: 'Loono',
    text: `Jedním z našich největších partnerů je Loono.
    Tým mladých lékařů, studentů lékařských fakult a jiných nadšenců, kteří lidem ukazují, že na zdraví a prevenci záleží.
    Pořádají pravidelně workshopy a na jejich webových stránkách se každý pohodlně dozví například to, jak si provést
    samovyšetření prsou nebo varlat. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula.
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    id: 'loono',
    src: './images/loono.jpg',
    alt: 'Loono tým'},

  { name: 'Avon pochod',
    text: `Spolupracujeme se zdravotními nadacemi, neziskovými organizacemi a skvělými lidmi. Je pro nás velikou ctí, že jedním z našich
    partnerů je i nadace Avon, která každoročně pořádá Avon pochod Prahou. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    id: 'avon',
    src: './images/avon.jpg',
    alt: 'Avon pochod'},

  { name: 'STK pro chlapy',
    text: `Dalším z našich partnerů je STK pro chlapy.
    Až se chlapi začnou starat o své zdraví jako o auta, budeme mít vyhráno! Starejte se o své zdraví. Zajděte na prohlídku včas. Nepřehlížejte příznaky.
    Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Dum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    id: 'stk',
    src: './images/stk.jpg',
    alt: 'STK pro chlapy'},

  { name: 'Ruce na prsa',
    text: `Hlavním cílem kampaně „Ruce na prsa“ je zvýšit povědomí o důležitosti samovyšetření prsu pro nejširší veřejnost. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    id: 'rucenaprsa',
    src: './images/rucenaprsa.jpg',
    alt: 'STK pro chlapy'},
]
*/
