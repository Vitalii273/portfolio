import React from 'react';


export default function Footer(props) {
    return (
        <footer className="footer text-center">
            <div className="inner">
                <p>&copy; {new Date().getFullYear()} Copyright: Adler Vitalii</p>
            </div>
        </footer>
    )
}
