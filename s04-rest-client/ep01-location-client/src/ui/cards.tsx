import type React from "react";

export default function Card({children, bottom} : {children : React.ReactNode, bottom? : boolean }) {
    return (
        <div className={bottom ? 'card mb-3' : 'card'} >
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}