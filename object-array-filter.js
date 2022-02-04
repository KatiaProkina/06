let objects = [
    {name :'Василий',surname : 'Васильев'},
    {name : 'Иван',surname : 'Иванов'},
    {name : 'Пётр', surname : 'Петров'}

]
function filter (objects,index,value){
    let result = []
    for (let i = 0;i < objects.length;i++){
        let obj = objects[i]
        if (obj[index] === value) result.push(obj)
    }
    return result
}

export default filter