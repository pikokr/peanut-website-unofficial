import React, {Component} from 'react';
import classes from './styles.module.scss'
import AnimatedText from "../../components/AnimatedText";
import tm from './teammate.module.scss'

class Teammate extends Component {
    state = {
        active: false
    }

    render() {
        return (
            <div style={{
                flexGrow: 1,
                background: '#fff',
                alignSelf: 'stretch'
            }}>
                <div onClick={() => (this.setState({active: true}))} className={`${tm.button}`}>
                    {this.props.name}
                </div>
                <div className={`${tm.overlay} ${this.state.active ? tm.active : ''}`} onClick={() => this.setState({active: false})}>
                    {
                        this.state.active && <div className={tm.container}>
                            <h1 className={tm.title}>
                                <AnimatedText text={this.props.name} interval={0.05} divide={20}/>
                            </h1>
                            {this.props.desc}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <section className={classes.hero}>
                    <h1 style={{fontSize: '3rem'}}>
                        <AnimatedText text="Team Peanut"/>
                    </h1>
                    <h1 style={{fontSize: '3rem'}}>
                        <AnimatedText text="뭔가 하는 팀" delay={1}/>
                    </h1>
                </section>
                <section className={`${classes.flex__col} ${classes.minFullHeight}`}>
                    <h1 style={{
                        paddingTop: 10
                    }}>팀원 소개</h1>
                    <div className={`${classes.flex__row} ${classes.sec2}`} style={{
                        width: '100vw',
                        flexGrow: 2,
                        background: '#000'
                    }}>
                        <Teammate name="Item1" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                        <Teammate name="Item2" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                        <Teammate name="Item3" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                    </div>
                    <div className={`${classes.flex__row} ${classes.sec2}`} style={{
                        width: '100vw',
                        flexGrow: 2,
                        background: '#000'
                    }}>
                        <Teammate name="Item1" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                        <Teammate name="Item2" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                        <Teammate name="Item3" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                    </div>
                    <div className={`${classes.flex__row} ${classes.sec2}`} style={{
                        width: '100vw',
                        flexGrow: 2,
                        background: '#000'
                    }}>
                        <Teammate name="Item1" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                        <Teammate name="Item2" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                        <Teammate name="Item3" brief="설명설명" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque fuga illo incidunt ipsam modi natus nemo obcaecati perferendis placeat porro quam quas quibusdam recusandae repellat, repudiandae rerum ullam veniam."/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;