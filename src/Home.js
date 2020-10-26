import React from 'react'
import Button from './components/Home/Button'
import InputField from './components/Home/InputField'
import List from './components/Home/List'
import Title from './components/Title'
import {connect} from 'react-redux';

function Home(props) {
    return (
        <div className = "home-background max-w-full h-screen">
            <Title title = "Home" />
            <div className = "text-4xl font-black text-center mb-32">
                Type your categories!
            </div>
            <InputField />
            <List elemente={props.items}/>
            <Button />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.categories.items,
    };
};

export default connect(mapStateToProps)(Home);