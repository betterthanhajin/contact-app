import React, { Component , Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone:''
    }


    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    
    handleRemove = () => {
        const {info,onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        //true -> false
        //onupdate
        //false -> true
        // state에 info값을 넣어주기
        const {info, onUpdate} = this.props;
        if(this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }else{
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        this.setState({
            editing : !this.state.editing,
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {name, phone} = this.props.info;
        const {editing} = this.state;
        const style = {
            border:'1px solid black'
        }


        return (
            <div style={style}>
                {
                    editing ? (
                    <Fragment>
                    <input name = "name"
                    onChange={this.handleChange} value={this.state.name}/>
                    <input name="phone" onChange={this.handleChange} value={this.state.phone}/>
                    </Fragment>

                    ) : (
                        <Fragment>
                            <div>{name}</div>
                            <div>{phone}</div>
                        </Fragment>

                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>reviese</button>
                {
                    editing? '적용' : '수정'
                }
            </div>
        );
    }
}

export default PhoneInfo;