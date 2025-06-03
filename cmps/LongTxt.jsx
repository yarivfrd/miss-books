
const { useState } = React;

export default function LongTxt({ txt, length = 100 }) {

    const [isCollapsed, setIsCollapsed] = useState(false);

    txt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    function handleCollpaseToggle() {
        setIsCollapsed(curr => !curr);
    }

    return (
        <div className="LongTxt" style={{backgroundColor: 'whitesmoke', padding: '20px'}}>
            <p>{isCollapsed ? txt : `${txt.substring(0, length).trim()}...`}</p>
            <button onClick={handleCollpaseToggle}>{isCollapsed ? 'Read less' : 'Read more'}</button>
        </div>
    )
}
