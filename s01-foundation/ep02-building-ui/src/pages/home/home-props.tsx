export default function HomeProperties() {
    return (
        <>
            <h4>Properties for a Component</h4>

            <p>React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any TypeScript value through them, including objects, arrays, and functions.</p>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">You will learn</h5>

                    <ul>
                        <li>How to pass props to a component</li>
                        <li>How to read props from a component</li>
                        <li>How to specify default values for props</li>
                        <li>How to pass some TSX to a component</li>
                        <li>How props change over time</li>
                    </ul>
                </div>
            </div>
        </>
    )
}