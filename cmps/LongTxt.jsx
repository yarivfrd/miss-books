import { makeLorem } from "../services/util.service.js";
const { useState } = React;

const dummyText = makeLorem()

export default function LongTxt({ txt = dummyText, length = 100 }) {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="LongTxt">
            <p>
                {isCollapsed ? txt : `${txt.substring(0, length).trim()}... `}
                <a onClick={() => setIsCollapsed(curr => !curr)}> Show {isCollapsed ? 'less' : 'more'}</a>
            </p>
            
        </div>
    )
}
