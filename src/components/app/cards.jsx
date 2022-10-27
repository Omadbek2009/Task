import React, { Component } from 'react';
import '../styles/cards.scss';
class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'Dispetcher',
            email: 'dispetcher@gmail.com'
        }
        this.handleDriver = this.handleDriver.bind(this)
        this.handleTeacher = this.handleTeacher.bind(this)
    }

    handleDriver() {
        this.setState({ msg: 'Driver' })
        this.setState({ email: 'driver@gmail.com' })
    }
    handleTeacher() {
        this.setState({ msg: 'Teacher'})
        this.setState({ email: 'teacher@gmail.com' })
    }

    render() {
        return (
            <>
                <div className="home">
                    <div className="card">
                        <div className="img">
                            <h2>{this.state.msg}</h2>
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=600" alt="rasm bor" />
                            <h2>Omadbek</h2>
                            <p>{this.state.email}</p>
                            <div className="icon">
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-telegram"></i></a>
                                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className="btn">
                            <button onClick={this.handleDriver}><p>Omadbek Toxtasinov</p><a href="#" >Driver</a></button>
                            <button onClick={this.handleTeacher}><p>Omadbek Toxtasinov</p><a href="#" >Teacher</a></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default Cards;