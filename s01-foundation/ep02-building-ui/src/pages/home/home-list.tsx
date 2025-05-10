export default function HomeListItem() {
    return (
        <>
            <h4>Rendering List</h4>

            <p>You will often want to display multiple similar components from a collection of data. You can use the TypeScript array methods to manipulate an array of data. On this page, you’ll use filter() and map() with React to filter and transform your array of data into an array of components.</p>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">You will learn</h5>

                    <ul>
                        <li>How to render components from an array using JavaScript’s map()</li>
                        <li>How to render only specific components using JavaScript’s filter()</li>
                        <li>When and why to use React keys</li>
                    </ul>
                </div>
            </div>
        </>
    )
}