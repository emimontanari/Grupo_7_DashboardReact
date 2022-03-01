import React from 'react';

export default function Sectionrow (params){
    return (<div className="tabsItem">
                <span className="tabsTitle">{params.title}</span>
                <div className="tabsMoneyContainer">
                    <span className="tabsMoney">{params.value}</span>
                </div>
            </div>);
}