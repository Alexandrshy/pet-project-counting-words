import React from 'react';

const SelectText = ({options = [], title = '', arrayLanguage}: {options: Array<string>, title: string}) =>
    <div className="select-text-item">

            <label class="label">
                {title}
                <select 
                    className='select-text select' onChange={console.log(22)}>
                        {arrayLanguage.map((n,i) =>
                            <option 
                                key={i}
                                value={n}>{n}</option>
                        )}
                </select>
            </label>

    </div>

export default SelectText;