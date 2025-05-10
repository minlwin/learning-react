export default function HomeConditional() {
    return (
        <>
            <h4>Conditional Rendering</h4>

            <p>Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.</p>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">You will learn</h5>

                    <ul>
                        <li>How to return different JSX depending on a condition</li>
                        <li>How to conditionally include or exclude a piece of TSX</li>
                        <li>Common conditional syntax shortcuts you’ll encounter in React codebases</li>
                    </ul>
                </div>
            </div>
        </>
    )
}