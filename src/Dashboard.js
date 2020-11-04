import React from "react";
import { connect } from "react-redux";
import Title from './components/Title'
import InputField from './components/Dashboard/InputField'
import Card from './components/Dashboard/Card'
import List from './components/Dashboard/List'
import {Link} from 'react-router-dom';

function Dashboard(props) {
  const labels = [...props.elemente];
  const renderCards = () => {
    return labels.map((el, idx) => {
      let sumaNoua = 0;
      props.elemente[idx].elemente.map((e) => {
        sumaNoua = sumaNoua + +e.price;
      });
      return (
        <div key={idx}>
          <Card label={el.name} suma={sumaNoua} />
          <List category={idx} />
        </div>
      );
    });
  };
  return (
    <div>
      <div className="max-w-full background h-screen">
        <Title title = "Dashboard" />
        <InputField />
        <div className="flex justify-around mt-12">{renderCards()}</div>
        <div className = "text-center absolute inset-x-0 bottom-0 mb-8">
          <Link to = "/">
            <button className={`py-2 px-4 bg-purple-700 text-white rounded hover:bg-purple-600 border-2 border-black`}>
              Home
            </button>
          </Link>
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    elemente: state.categories.items,
  };
};

export default connect(mapStateToProps)(Dashboard);
