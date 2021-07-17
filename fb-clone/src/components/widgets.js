import React from 'react';
import '../css/widgets.css';

function widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FZLaner%2Fvideos%2F1000654080711222%2F&show_text=true&width=560&t=0"
                title="Clever Programmer Fb Page"
                width="250"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default widgets
