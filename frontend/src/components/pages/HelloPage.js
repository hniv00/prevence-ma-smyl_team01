import React, {Component} from 'react'
import { Parallax, Background } from 'react-parallax';

import { Heading } from '../atoms/Heading';


export class HelloPage extends Component{
    render(){
        return(
            <div>
              <Heading>Nic to nebolí. Nic to nestojí. Může ti zachránit život. Prevence má smysl!</Heading>
              <p>Stačí pár kliknutí a hned budete vědět, na jakou preventivní prohlídku nezapomenout.</p>
            </div>
        );
    }
}
