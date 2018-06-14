var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var Toggleable = /** @class */ (function (_super) {
    __extends(Toggleable, _super);
    function Toggleable(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnClick = function () {
            var newValue = (_this.state.value + 1 >= _this.props.children.length ? 0 : _this.state.value + 1);
            if (!_this.props.hasOwnProperty("value"))
                _this.setState({ value: newValue });
            if (_this.props.onChange)
                _this.props.onChange(newValue);
        };
        _this.state = { value: props.value || 0 };
        return _this;
    }
    Toggleable.prototype.componentWillReceiveProps = function (newProps) {
        if (this.props.hasOwnProperty("value"))
            this.setState({ value: newProps.value || 0 });
    };
    Toggleable.prototype.render = function () {
        var _this = this;
        if (this.props.children[this.state.value].props.onClick) {
            return React.cloneElement(this.props.children[this.state.value], { onClick: function () {
                    _this.handleOnClick();
                    _this.props.children[_this.state.value].props.onClick();
                } });
        }
        return React.cloneElement(this.props.children[this.state.value], { onClick: this.handleOnClick });
    };
    return Toggleable;
}(React.Component));
export default Toggleable;
//# sourceMappingURL=Toggleable.js.map