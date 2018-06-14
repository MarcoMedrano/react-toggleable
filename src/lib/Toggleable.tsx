import * as React from 'react';

export interface IToggleableProps {
    children: JSX.Element[],
    value?: number,
    onChange?: (newValue: number) => void
}

export interface IToggleableState {
    value: number
}

export default class Toggleable extends React.Component<IToggleableProps, IToggleableState> {
    constructor(props: IToggleableProps) {
        super(props);

        this.state = { value: props.value || 0 }
    }

    public componentWillReceiveProps(newProps: IToggleableProps) {
        if (this.props.hasOwnProperty("value")) this.setState({ value: newProps.value || 0 });
    }

    public render(): JSX.Element {
        if(this.props.children[this.state.value].props.onClick){
            return React.cloneElement(
                this.props.children[this.state.value],
                { onClick: () => {
                    this.handleOnClick();
                    this.props.children[this.state.value].props.onClick();
                } },
            );
        }
        return React.cloneElement(
            this.props.children[this.state.value],
            { onClick: this.handleOnClick },
        );
    }

    private handleOnClick = () => {
        const newValue = (this.state.value + 1 >= this.props.children.length ? 0 : this.state.value + 1)

        if (!this.props.hasOwnProperty("value")) this.setState({ value: newValue });
        if (this.props.onChange) this.props.onChange(newValue);
    }
}
