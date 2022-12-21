import {Component} from 'react';

class Mount extends Component
{
    constructor(props)
    {
      console.log(" 1 From constructor");  
      super(props);

      this.state={
        count:0
      }

    }

    static getDerivedStateFromProps()
    {
        console.log("From getDerievedStateFromProps");
        return null;
    }

    
    componentDidMount()
    {
      console.log("From componentDidMount");   
    }


    render()
    {
        
        return(
            <>
            <p>{this.state.count}</p>
            <button onClick={(e)=>{
                this.setState({count:this.state.count+1});
            }}>click</button>
            </>
        )
    }


}

export default Mount;

