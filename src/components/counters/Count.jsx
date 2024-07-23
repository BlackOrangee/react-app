import React, { memo } from 'react';

const render = {
    count1: 0,
    count2: 0

}

const Count = (value, id) => {
    console.log(`Count ${id}, render: ${++render[`count${id}`]}`);
    return (
        <samn>
            {value.count}
        </samn>
    );
}

export default memo(Count);
