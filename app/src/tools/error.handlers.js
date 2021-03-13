const checkError = (dataState) => {
    for(let field in dataState){
        console.log(field);
        switch (field) {

            case 'name':
                console.log(dataState[field])
                // eslint-disable-next-line
                if(dataState[field] === ''){
                    return 'The field name cannot be empty'
                }
                if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(dataState[field])){
                    return 'The name can only contain letters';
                }
                break;

            case 'phone':
                console.log(dataState[field])
                if(dataState[field] === ''){
                    return 'The field phone cannot be empty'
                }
                if(! /^[0-9]{9,11}$/.test(dataState[field])){
                    return 'Phone number should have 9 digits.';
                }
                break;
            case 'email':
                console.log(dataState[field])
                if(dataState[field] === ''){
                    return 'The field email cannot be empty'
                }
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(dataState[field]) ){
                    return 'The email does not have the expected format';
                }    
                break;
            case 'password':
                console.log(dataState[field])
                if(dataState[field] === ''){
                    return 'The field password cannot be empty'
                }
                // eslint-disable-next-line
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(dataState[field])){
                    return 'The password must contain 8 characters, uppercase, lowercase, numbers and special characters';
                }
                break;    
            default:
                break;
        }
    };
};
export default checkError;