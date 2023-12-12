export default function isNotUnderage(field) {
    const birthDate = new Date(field.value);
    
    if (!validateAge(birthDate)) {
        field.setCustomValidity('O usuário não é maior de idade')
    }
}

function validateAge(date) {
    const todayDate = new Date();
    const datePlus18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return todayDate >= datePlus18;
}