import React from "react";

function NewsItem(props) {
    let {
        desc, title, imageURL,
        newsUrl, sourceName
    } = props;
    return (
        <div>
            <div >
                <img src={imageURL}
                    alt="..." />
                <div >
                    <h5 >{title}</h5>
                    <p>
                        {sourceName}
                    </p>
                    <p >{desc}</p>
                    <a href={newsUrl}
                        target="_blank"
                    >
                        Read More...
                    </a>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default NewsItem;