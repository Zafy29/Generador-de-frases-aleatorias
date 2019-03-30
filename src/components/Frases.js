import React from "react";
import { connect } from "react-redux";
import { nuevaFraseAction } from "../Redux/actions";
import "../styles/Frases.css";

const mapStateToProps = state => {
  return {
    quote: state.quote,
    author: state.author
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generarFrase: () => {
      dispatch(nuevaFraseAction());
    }
  };
};

const Frases = ({ quote, author, generarFrase }) => {
  const tweetMessage = `"${quote}". %0a -${author}. %23Frase`;
  return (
    <div id="quote-box">
      <div id="text">
        <p> 
          <i className="fas fa-quote-left" /> { quote }. <i className="fas fa-quote-right"/> 
        </p>
      </div>
      <div id="author">
        <p>
          <i className="fas fa-angle-double-right" /> {author}.
        </p>
      </div>
        <div id="new-quote">
            <button onClick={generarFrase} id="button">
            ¡Quiero otra frase!
            </button>
        </div>
        <a
            href={"https://twitter.com/intent/tweet?text=" + tweetMessage}
            id="tweet-quote"
            target="_blank _self"
            rel="noopener noreferrer"
            >
            <i className="fab fa-twitter" />
        </a>
    </div>
  );
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Frases);

export default ConnectedComponent;
