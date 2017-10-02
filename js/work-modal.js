import React from 'react';

class ExampleWorkModal extends React.Component{
  render() {
    let exampleVar = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt={ exampleVar.image.desc }
             className="modal__image"
             src={ exampleVar.image.src } />
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            { exampleVar.title }
          </h2>
          <a className="color--skyBlue modal__link"
             href={ exampleVar.href }>
            Check it out
          </a>
          <p className="modal__description">
            { exampleVar.desc }
          </p>
        </div>
      </div>
    )
  };
};

export default ExampleWorkModal;
