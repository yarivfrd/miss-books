
const { useState } = React;

const dummyText = 'At Miss Books, we believe every story has the power to spark imagination and inspire growth. Our mission is to bring readers closer to the books they love — from bestsellers to hidden gems — all curated with care and passion. Whether you’re a lifelong bookworm or just beginning your reading journey, Miss Books is your welcoming corner of the literary world.'

export default function LongTxt({ txt = dummyText, length = 100 }) {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="long-txt">
            <p>
                {isCollapsed ? txt : `${txt.substring(0, length).trim()}... `}
                <button className="show-more-toggle-btn" onClick={() => setIsCollapsed(curr => !curr)}>&nbsp;Show {isCollapsed ? 'less' : 'more'}</button>
            </p>
        </div>
    )
}
