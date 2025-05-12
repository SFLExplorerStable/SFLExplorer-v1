interface RCProp {
    i: number;
    text: boolean,
    onClick: (rc_index: number) => void;
    from: string;
    to: string;
    msg: string;
}

const RC: React.FC<RCProp> = ({ i, text, onClick, from, to, msg }) => {
    const isFirst = i == 1;
    if (!text) {
        return <><button
            className="rc single"
            id={isFirst ? "" : "first_button"}
            onClick={() => onClick(i)}
        >
            <div></div>
            <div id="progress">{msg}</div>
            <div></div>
        </button><br /></>;
    } else {
        return <><button
            className="rc multiple"
            id={isFirst ? "" : "first_button"}
            onClick={() => onClick(i)}
        >
            <div className="from">
                <pre>{from}</pre>
            </div>
            <div id="rarrow"><p>{"▷*"}</p></div>
            <div className="to">
                <pre className="to">{to}</pre>
            </div>
        </button><br /></>;        
    }
}

export default RC   