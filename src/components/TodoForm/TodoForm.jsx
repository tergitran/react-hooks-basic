import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoForm = props => {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!onSubmit) return;
        console.log("hdh")

        const formValues = {
            title: value,
        }


        onSubmit(formValues);

        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange}></input>
        </form>
    );

    //Input sumbit bằng enter khi có thẻ form
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

export default TodoForm;