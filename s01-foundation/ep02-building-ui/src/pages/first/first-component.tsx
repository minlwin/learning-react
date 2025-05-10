import PageTitle from "../../utils/page-title";

export default function FirstComponent() {
    return (
        <section>
            <PageTitle title="First Component" />

            <div className="row">
                <div className="col-3">
                    <Profile />
                </div>
                <div className="col-3">
                    <Profile />
                </div>
                <div className="col-3">
                    <Profile />
                </div>
                <div className="col-3">
                    <Profile />
                </div>
            </div>
        </section>
    )
}

function Profile() {
    return (
        <div className="card">
            <img src="/profile.jpg" className="card-img-top" />
            <div className="card-body">
                <h5>User Name</h5>

                <div>Phone Number</div>
                <div>Welcome Message is Good Morning.</div>
            </div>
        </div>
    )
}