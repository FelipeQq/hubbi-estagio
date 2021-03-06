import { Component } from 'react';
import CharInfo from './CharInfo';

class List extends Component{
  render(){
    const people = this.props.people;
    
    return(
      <div>
        {
          people.map((p) => {
              return (
                <div key={p.url}>
                  <h1 className="char-name">{p.name}</h1>
                  <CharInfo charInfo={p} />
                </div>
            )
          })
        }
      </div>
    );
  };
}

export default List;