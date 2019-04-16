import React from 'react';
import { Option } from 'react-select';
import classNames from 'classnames';

class SelectOption extends Option {
  render() {
    const { option, instancePrefix, optionIndex } = this.props;
    const className = classNames(this.props.className, option.className);

    if (option.disabled) {
      return (
        <div
          className={className}
          data-role="select-option"
          onClick={this.blockEvent}
          onMouseDown={this.blockEvent}
        >
          {this.props.children}
        </div>
      );
    }

    return (
      <div
        aria-label={option.label}
        className={className}
        data-role="select-option" // <= ТУТЬ
        id={`${instancePrefix}-option-${optionIndex}`}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        onTouchEnd={this.handleTouchEnd}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchStart}
        role="option"
        style={option.style}
        title={option.title}
      >
        {this.props.children}
      </div>
    );
  }
}

export { SelectOption };
