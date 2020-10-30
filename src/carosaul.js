import React, { Component } from 'react';

class Carosaul extends Component {
    state = {
      heading: 'Categories Component',
      isEdit: true,
      name: "",
      img: [
        'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
          'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=727&q=80',
          'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'],
      currentImg: 0,
    };

    // componentDidMount = () => {
    //     console.log('woo')
    // }

    next = (event) => {
        if (this.state.currentImg < ((this.state.img).length - 1)) {
        this.setState({
            currentImg: this.state.currentImg + 1
        })
    } else {
        this.setState({
            currentImg: 0
        })
    }
    }

    previous = (event) => {
        if (this.state.currentImg > 0) {
            this.setState({
                currentImg: this.state.currentImg - 1
            })
        } else {
            this.setState({
                currentImg: ((this.state.img).length - 1)
            })
        }
    }

    render() {
       return (
        <div>
            <h3>carousel</h3>
            <button onClick={() => this.next()} >next</button>
        <button onClick={() => this.previous()} >previous</button>
        <br />
        <img src={this.state.img[this.state.currentImg]}/>
        
        </div>
       )
    }

}

export default Carosaul