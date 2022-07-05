import './ChartBar.css';

const ChartBar = props => {

    console.log(props.label, props.value, props.maxValue, (props.value / props.maxValue), Math.round(props.value / props.maxValue));


    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
    }

    console.log(barFillHeight);

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;